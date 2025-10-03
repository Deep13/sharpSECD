"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button, Form, FormControl, Accordion, Card } from "react-bootstrap";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Pagination from "react-js-pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from "next/navigation";
import lcdImage from "@/assets/product_industrial_lcd.jpg";
import Footer from "@/components/Footer";

import { products } from "@/json/Industrial_LCD";
import filters from "@/json/Filter Industrial LCD";
import Head from "next/head";
import GPProductItem from "@/components/GProductItem";
import ProductDetail from "@/components/ProductDetail";

export default function ProductsPage() {
  const productsRef = useRef(null);
  const searchParams = useSearchParams();

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
    const newData = products.slice(0, 10);
    setData(newData);

    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      handleSearch(searchQuery);
      scrollToRef(productsRef);
    } else {
      const defaultFilter = { "LIFE CYCLE": ["Production", "Pre-production"] };
      onDoFilter(defaultFilter);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
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

  const handleTableSearch = (e) => handleSearch(e.target.value);

  const handleSearch = (text) => {
    setSearch(text);
    setShowClear(text.length > 0);
    const newData = filterSearchFunction(text, filter);
    setData(newData);
    setPageLength(newData.length);
  };

  const filterSearchFunction = (text, filters) => {
    let filteredData = tempData;

    if (text) {
      filteredData = filteredData.filter((item) =>
        item.PN.toUpperCase().includes(text.toUpperCase())
      );
    }

    return filterPlainArray(filteredData, filters);
  };

  const filterPlainArray = (array, filters) => {
    const getValue = (value) =>
      typeof value === "string" ? value.toUpperCase() : value;

    const filterKeys = Object.keys(filters);
    return array.filter((item) =>
      filterKeys.every((key) => {
        if (!filters[key]?.length) return true;

        if (key === "VIEWING ANGLE") {
          return (
            filters[key].some(
              (filter) =>
                getValue(filter) === getValue(item["VIEWING ANGLE 6 O'CLOCK"])
            ) ||
            filters[key].some(
              (filter) =>
                getValue(filter) === getValue(item["VIEWING ANGLE 12 O'CLOCK"])
            ) ||
            filters[key].some(
              (filter) =>
                getValue(filter) ===
                getValue(item["VIEWING ANGLE SIDE TO SIDE"])
            )
          );
        } else {
          return filters[key].some(
            (filter) => getValue(filter) === getValue(item[key])
          );
        }
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
    const nextLimit = pageNumber * 10;
    setData(tempData.slice(nextLimit - 10, nextLimit));
    setActivePage(pageNumber);
  };

  return (
    <div>
      <Head>
        <title>General Purpose LCD Displays | Sharp SECD</title>
        <meta
          name="description"
          content="Explore Sharp’s general-purpose LCD modules—available in multiple sizes, brightness levels, and resolutions. Ideal for industrial, embedded, and custom displays."
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
          <div tabIndex={-1} style={{ height: "100%" }}>
            <h1>General Purpose LCDs</h1>
            <p>
              Whether you are looking for a General Purpose LCD from our stock
              line-up, a display with premium out-of-the-box performance under
              Sharp warranty, or a specialized multi-touch PCAP or
              High-Brightness value-added solution, we have the display to meet
              your needs.
            </p>
            <p>
              Plus, our deep engineering resources and U.S.-based technical
              support give you the boost you need to get to market quickly.
            </p>
            <Button
              aria-label="Find your local rep"
              size="lg"
              variant="outline-danger"
              href="#/contact"
            >
              Find a Rep
            </Button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          className="col-md-6"
        >
          <Image
            role="presentation"
            alt="Sharp general-purpose LCD models with size and resolution specs"
            src={lcdImage}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div
        className="mobile-padding-40 col-md-12"
        style={{ padding: "40px 100px" }}
      >
        <div className="row">
          <div className="col-lg-3 " style={{ paddingBottom: 30 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3>Refine by</h3>
              <Button
                aria-label="Clear filter"
                variant="link"
                style={{
                  textDecoration: "none",
                  color: "#e61d24",
                  cursor: "pointer",
                }}
                onClick={clearFilter}
              >
                <h6>Clear all</h6>
              </Button>
            </div>
            <br />
            <Accordion>
              {filters.content.map((item, key) => (
                <Card className="noBorder" key={key}>
                  <Accordion.Item eventKey={key.toString()}>
                    <Accordion.Header>
                      <div className="row">
                        <div className="col-9">{item.title}</div>
                        <div
                          className="col-3"
                          style={{ textAlign: "right", paddingRight: 10 }}
                        >
                          <Button
                            aria-label={"Refine By " + item.title}
                            className="no-decor-button"
                          >
                            <ExpandMoreIcon />
                          </Button>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form role="group">
                        {item.values.map((content, idx) => (
                          <Form.Check
                            id={content}
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

          <div className="col-lg-9">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div ref={productsRef} className="col-lg-6">
                <h3>Products({pageLength})</h3>
              </div>
              <div className="col-lg-6">
                <Form
                  inline
                  className="headerSearch"
                  onSubmit={onSubmit}
                  style={{ justifyContent: "flex-end", padding: 5 }}
                >
                  <FormControl
                    variant="outline-danger"
                    type="text"
                    value={search}
                    placeholder="Search by Part No."
                    className="mr-sm-2"
                    onChange={handleTableSearch}
                  />
                  <HighlightOffIcon
                    className="clearIcon"
                    style={{ color: "#e61d24", opacity: showClear ? 1 : 0 }}
                    onClick={() => handleSearch("")}
                  />
                </Form>
              </div>
            </div>
            <br />
            {data.length > 0 ? (
              data.map((item, key) => (
                <div key={key}>
                  <GPProductItem
                    item={item}
                    showModal={() => handleShow(item)}
                  />
                  {item.PDF && (
                    <div style={{ marginBottom: "20px" }}>
                      <a
                        href={item.PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-danger"
                      >
                        Download Spec
                      </a>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: "600",
                }}
              >
                No records available
              </div>
            )}
            <div className="row space-between-justify padding-30">
              <div className="col-sm-8" style={{ paddingLeft: 0 }}>
                For more information on any of these products please find your
                local rep below
                <div style={{ padding: "10px 0px" }}>
                  <Button
                    aria-label="Find your local rep"
                    size="lg"
                    variant="outline-danger"
                    href="#/contact"
                  >
                    Find a Rep
                  </Button>
                </div>
              </div>
              <div
                style={{ justifyContent: "flex-end" }}
                className="col-sm-4 pagination"
              >
                <Pagination
                  hideDisabled
                  itemClass="page-item"
                  linkClass="page-link"
                  pageRangeDisplayed={10}
                  activePage={activePage}
                  itemsCountPerPage={10}
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
        parent="IL"
      />
      <Footer />
    </div>
  );
}
