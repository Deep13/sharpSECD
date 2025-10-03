"use client";

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  Image,
  Button,
  Form,
  FormControl,
  Accordion,
  Card,
} from "react-bootstrap";
import Pagination from "react-js-pagination";
import lcdImage from "@/assets/eposters/Sharp-ePoster-Product-Page.jpg";
import Eposters_product_item from "@/components/EposterProductItem";
import Footer from "@/components/Footer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Productdetail from "@/components/ProductDetail";
import AOS from "aos";
import { products } from "@/json/ePoster_products";
import filters from "@/json/ePoster_products_filters";
import "aos/dist/aos.css";

AOS.init();

export default function EpostersProduct({ searchQuery }) {
  const productsRef = useRef(null);

  const [activePage, setActivePage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState(null);
  const [data, setData] = useState([]);
  const [tempData] = useState(products);
  const [pageLength, setPageLength] = useState(products.length);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({});
  const [showClear, setShowClear] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    // Initialize first page
    setData(products.slice(0, 11));

    // Apply initial search/filter if query exists
    if (searchQuery) {
      scrollToRef(productsRef);
      handleSearch(searchQuery);
    } else {
      const defaultFilter = { "LIFE CYCLE": ["Production", "Pre-production"] };
      onDoFilter(defaultFilter);
    }
  }, []);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const handleClose = () => setShowModal(false);
  const handleShow = (item) => {
    setItems(item);
    setShowModal(true);
  };

  const handleTableSearch = (e) => handleSearch(e.currentTarget.value);

  const clearFilter = (e) => {
    e.preventDefault();
    setFilter({});
    onDoFilter({});
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
  };

  const handleSearch = (value) => {
    setSearch(value);
    setShowClear(value.length > 0);
    const newData = filterSearchFunction(value, filter);
    setData(newData);
    setPageLength(newData.length);
  };

  const filterSearchFunction = (text, filtersObj) => {
    let newData = tempData;
    if (text) {
      newData = newData.filter((item) =>
        item["PN"].toUpperCase().includes(text.toUpperCase())
      );
    }
    return filterPlainArray(newData, filtersObj);
  };

  const filterPlainArray = (array, filtersObj) => {
    const getValue = (v) => (typeof v === "string" ? v.toUpperCase() : v);
    const filterKeys = Object.keys(filtersObj);

    return array.filter((item) =>
      filterKeys.every((key) => {
        if (!filtersObj[key]?.length) return true;
        return filtersObj[key].some(
          (filterValue) => getValue(filterValue) === getValue(item[key])
        );
      })
    );
  };

  const selectFilter = (e) => {
    const item = e.currentTarget.dataset;
    let totalFilterValue = { ...filter };

    if (e.currentTarget.checked) {
      if (totalFilterValue[item.category]) {
        totalFilterValue[item.category].push(item.option);
      } else {
        totalFilterValue[item.category] = [item.option];
      }
    } else {
      totalFilterValue[item.category] = totalFilterValue[item.category].filter(
        (opt) => opt !== item.option
      );
      if (totalFilterValue[item.category].length === 0)
        delete totalFilterValue[item.category];
    }
    onDoFilter(totalFilterValue);
  };

  const onDoFilter = (totalFilterValue) => {
    let filteredData = search
      ? filterSearchFunction(search, totalFilterValue)
      : tempData;
    if (Object.keys(totalFilterValue).length > 0) {
      filteredData = filterPlainArray(filteredData, totalFilterValue);
    }
    setFilter(totalFilterValue);
    setData(filteredData);
    setPageLength(filteredData.length);
  };

  const handlePageChange = (pageNumber) => {
    const nextLimit = pageNumber * 11;
    setData(tempData.slice(nextLimit - 11, nextLimit));
    setActivePage(pageNumber);
  };

  const callFunct = (e, link) => {
    e.preventDefault();
    window.location.href = "#" + link;
  };

  return (
    <div>
      <Head>
        <title>ePoster Paperless Signage Module Products | Sharp SECD</title>
        <meta
          name="description"
          content="Discover Sharp’s available ePoster modules—a zero-power, high-contrast signage display with 60,000 colors, perfect for sustainable paper replacement solutions."
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
            <h1>ePoster Display Modules</h1>
            <br />
            <p>
              Sharp’s ePoster displays enables a paperless, ultra-low-power
              alternative to the expense and material waste of poster printing.
              An A2 size is available now, with other sizes planned in our
              product development roadmap.
            </p>
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
            alt="Concept image of Sharp ePoster 28.5-inch display module with simulated content"
            src={lcdImage}
            fluid
          />
          <p
            style={{
              fontStyle: "italic",
              fontSize: "small",
              textAlign: "center",
            }}
          >
            *Screen images shown are simulated. Actual display will differ.
          </p>
        </div>
      </div>

      <div
        className="mobile-padding-40 col-md-12"
        style={{ padding: "0px 100px 40px 100px" }}
      >
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-lg-3" style={{ paddingBottom: 30 }}>
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
                style={{
                  textDecoration: "none",
                  color: "#e61d24",
                  cursor: "pointer",
                }}
                onClick={clearFilter}
              >
                <span className="h6">Clear all</span>
              </Button>
            </div>
            <br />
            <Accordion>
              {filters.content.map((item, key) => (
                <Accordion.Item
                  eventKey={key.toString()}
                  key={key}
                  className="noBorder"
                >
                  <Accordion.Header>
                    <div className="row w-full">
                      <div className="col-9">{item.title}</div>
                      <div className="col-3 text-right pr-2">
                        <span className="text-xl">▼</span>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <form role="group">
                      {item.values.map((content, idx) => (
                        <div className="form-check" key={idx}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`${item.title}-${idx}`}
                            data-category={item.title}
                            data-option={content}
                            defaultChecked={
                              content === "Production" ||
                              content === "Pre-production"
                            }
                            onChange={selectFilter}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`${item.title}-${idx}`}
                          >
                            {content}
                          </label>
                        </div>
                      ))}
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          {/* Product Listing */}
          <div className="col-lg-9">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div ref={productsRef} className="col-lg-6">
                <h3>Products ({pageLength})</h3>
              </div>
              <div className="col-lg-6">
                <Form
                  inline
                  className="headerSearch"
                  onSubmit={(e) => e.preventDefault()}
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
              data.map((item, idx) => (
                <Eposters_product_item
                  key={idx}
                  item={item}
                  showModal={() => handleShow(item)}
                />
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

      <Productdetail
        show={showModal}
        handleClose={handleClose}
        items={items}
        parent="ML"
      />
      <Footer />
    </div>
  );
}
