"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button, Form, FormControl, Accordion, Card } from "react-bootstrap";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pagination from "react-js-pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "@/json/Memory_LCD";
import filters from "@/json/Filter Memory LCD";
import ProductItem from "@/components/ProductItem";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";
import lcdImage from "@/assets/product_memory_lcd.png";
import Head from "next/head";

export default function MemoryLCDPage() {
  const productsRef = useRef(null);

  const [activePage, setActivePage] = useState(1);
  const [show, setShow] = useState(false);
  const [items, setItems] = useState(null);
  const [data, setData] = useState([]);
  const [pageLength, setPageLength] = useState(products.length);
  const [tempData] = useState(products);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({});
  const [showClear, setShowClear] = useState(false);

  useEffect(() => {
    AOS.init();

    // Initial load: first 11 items
    setData(products.slice(0, 11));

    // Default filter
    const defaultFilter = { "LIFE CYCLE": ["Production", "Pre-production"] };
    onDoFilter(defaultFilter);

    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setItems(item);
    setShow(true);
  };

  const onSubmit = (e) => e.preventDefault();

  const handleTableSearch = (e) => handleSearchFunction(e.target.value);

  const handleSearchFunction = (text) => {
    setSearch(text);
    setShowClear(text.length > 0);
    const newData = filterSearchFunction(text, filter);
    setData(newData);
    setPageLength(newData.length);
  };

  const filterSearchFunction = (text, filtersObj) => {
    let filteredData = tempData;

    if (text) {
      filteredData = filteredData.filter((item) =>
        item.PN.toUpperCase().includes(text.toUpperCase())
      );
    }

    return filterPlainArray(filteredData, filtersObj);
  };

  const filterPlainArray = (array, filtersObj) => {
    const getValue = (value) =>
      typeof value === "string" ? value.toUpperCase() : value;

    const filterKeys = Object.keys(filtersObj);
    return array.filter((item) =>
      filterKeys.every((key) => {
        if (!filtersObj[key]?.length) return true;
        return filtersObj[key].some(
          (filter) => getValue(filter) === getValue(item[key])
        );
      })
    );
  };

  const onDoFilter = (totalFilterValue) => {
    setFilter(totalFilterValue);

    let filteredData = search
      ? filterSearchFunction(search, totalFilterValue)
      : tempData;

    if (Object.keys(totalFilterValue).length > 0) {
      filteredData = filterPlainArray(filteredData, totalFilterValue);
    }

    setData(filteredData);
    setPageLength(filteredData.length);
  };

  const clearFilter = (e) => {
    e.preventDefault();
    setFilter({});
    onDoFilter({});
  };

  const selectFilter = (e) => {
    const { category, option } = e.target.dataset;
    const newFilter = { ...filter };

    if (e.target.checked) {
      newFilter[category] = newFilter[category] || [];
      newFilter[category].push(option);
    } else {
      newFilter[category] = newFilter[category].filter((x) => x !== option);
      if (newFilter[category].length === 0) delete newFilter[category];
    }

    onDoFilter(newFilter);
  };

  const handlePageChange = (pageNumber) => {
    const nextLimit = pageNumber * 11;
    setData(tempData.slice(nextLimit - 11, nextLimit));
    setActivePage(pageNumber);
  };

  return (
    <div>
      <Head>
        <title>Memory-in-Pixel LCD Product Lineup | Sharp SECD</title>
        <meta
          name="description"
          content="Explore available sizes of MIP displays for battery-powered applications. 64-color or monochrome."
        />
      </Head>

      <div
        className="row container-row-85 padding-top-50 padding-bottom-30"
        style={{ overflowX: "hidden" }}
      >
        <div
          id="main-content"
          role="main"
          tabIndex={0}
          className="col-md-6"
          style={{ padding: 0 }}
        >
          <div tabIndex={-1}>
            <h1>Memory in Pixel LCDs</h1>
            <br />
            <p>
              Sharp's Memory-in-Pixel LCDs are the perfect solution for compact
              handheld, wearable, and other small-screen applications that
              require a battery. Choose from multiple sizes in 64-color, plus
              monochrome.
            </p>
            <div>
              <Button size="lg" variant="outline-danger" href="#/contact">
                Find a Rep
              </Button>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="col-md-6">
          <Image
            role="presentation"
            alt="Grid of Sharp Memory-in-Pixel LCD modules with product specs"
            src={lcdImage}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Filter Sidebar & Products */}
      <div
        className="mobile-padding-40 col-md-12"
        style={{ padding: "0px 100px 40px 100px" }}
      >
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 " style={{ paddingBottom: 30 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className="h3">Refine by</span>
              <Button
                variant="link"
                style={{ textDecoration: "none", color: "#e61d24" }}
                onClick={clearFilter}
              >
                <span className="h6">Clear all</span>
              </Button>
            </div>
            <br />
            <Accordion>
              {filters.content.map((item, key) => (
                <Card className="noBorder" key={key}>
                  <Accordion.Item eventKey={key.toString()}>
                    <Accordion.Header>
                      <div className="row w-100">
                        <div className="col-9">{item.title}</div>
                        <div className="col-3 text-end">
                          <ExpandMoreIcon />
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form role="group">
                        {item.values.map((content, idx) => (
                          <Form.Check
                            key={idx}
                            type="checkbox"
                            aria-label={item.title + " " + content}
                            label={content}
                            data-category={item.title}
                            data-option={content}
                            onChange={selectFilter}
                            defaultChecked={
                              content === "Production" ||
                              content === "Pre-production"
                            }
                          />
                        ))}
                      </Form>
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
              ))}
            </Accordion>
          </div>

          {/* Products */}
          <div className="col-lg-9">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div ref={productsRef} className="col-lg-6">
                <h3>Products({pageLength})</h3>
              </div>
              <div className="col-lg-6">
                <Form
                  className="headerSearch d-flex"
                  onSubmit={onSubmit}
                  style={{ justifyContent: "flex-end", padding: 5 }}
                >
                  <FormControl
                    variant="outline-danger"
                    type="text"
                    value={search}
                    placeholder="Search by Part No."
                    className="me-2"
                    onChange={handleTableSearch}
                  />
                  <HighlightOffIcon
                    className="clearIcon"
                    style={{
                      color: "#e61d24",
                      opacity: showClear ? 1 : 0,
                      cursor: "pointer",
                    }}
                    onClick={() => handleSearchFunction("")}
                  />
                </Form>
              </div>
            </div>

            <br />
            {data.length > 0 ? (
              data.map((item, key) => (
                <ProductItem
                  item={item}
                  key={key}
                  showModal={() => handleShow(item)}
                />
              ))
            ) : (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: 600,
                }}
              >
                No records available
              </div>
            )}

            {/* Pagination */}
            <div className="row space-between-justify padding-30">
              <div className="col-sm-8 ps-0">
                For more information on any of these products please find your
                local rep below
                <div style={{ padding: "10px 0px" }}>
                  <Button size="lg" variant="outline-danger" href="#/contact">
                    Find a Rep
                  </Button>
                </div>
              </div>
              <div className="col-sm-4 d-flex justify-content-end pagination">
                <Pagination
                  hideDisabled
                  itemClass="page-item"
                  linkClass="page-link"
                  pageRangeDisplayed={11}
                  activePage={activePage}
                  itemsCountPerPage={11}
                  totalItemsCount={pageLength}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductDetail
        show={show}
        handleClose={handleClose}
        items={items}
        parent="ML"
      />
      <Footer />
    </div>
  );
}
