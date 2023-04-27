import React, { Component } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Image, Button, Form, FormControl } from "react-bootstrap";
import Pagination from "react-js-pagination";
import lcdImage from "../../assets/product_memory_lcd.png";
import Productitem from "./prodctitem";
import Footer from "../../Footer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Productdetail from "./productdetail";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import { Helmet } from "react-helmet";
import { products } from "../../json/Memory_LCD";
import filters from "../../json/Filter Memory LCD";
import "aos/dist/aos.css";
AOS.init();
class Memory_lcd extends Component {
  constructor(props) {
    super(props);
    this.products = React.createRef();
    this.state = {
      activePage: 1,
      show: false,
      data: [],
      pageLength: products.length,
      tempData: products,
      search: "",
      filter: [],
      showClear: false,
      item: null,
    };
  }
  onSubmit = (event) => {
    event.preventDefault();
  };
  scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };
  handleClose = () => this.setState({ show: false });
  handleShow = (item) => {
    this.setState({ show: true, items: item });
  };
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "auto" });
    var newData = products.slice(0, 11);
    this.setState({ data: newData });
    var search = this.props.location.search.substring(8);
    if (search) {
      this.scrollToRef(this.products);
      this.handleSearch(search);
    }
  }
  handleTableSearch = (value) => {
    var text = value.currentTarget.value;
    this.handleSearch(text);
  };
  clearFilter = (event) => {
    this.setState({ filter: [] });

    this.onDoFilter([]);
    event.preventDefault();
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
  };
  handleSearch = (value) => {
    var text = value;
    if (text.length > 0) {
      this.setState({ showClear: true });
    } else {
      this.setState({ showClear: false });
    }
    this.setState({ search: text });
    var newData = this.FilterSearchFunction(text, this.state.filter);
    this.setState({ data: newData, pageLength: newData.length });
  };
  searchFilterFunction = (text, filter) => {
    var newData;
    // if (filter.length === 0) {
    newData = this.state.tempData;
    // } else {
    //   newData = this.onFilter(this.state.data, filter);
    // }
    if (text) {
      newData = newData.filter((item) => {
        const itemData = `${item["PN"].toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
    }
    newData = this.filterPlainArray(newData, filter);

    return newData;
  };
  FilterSearchFunction = (text, filter) => {
    var newData;
    if (Object.keys(filter).length === 0) {
      newData = this.state.tempData;
    } else {
      newData = this.filterPlainArray(this.state.tempData, filter);
    }
    if (text) {
      newData = newData.filter((item) => {
        const itemData = `${item["PN"].toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
    }
    return newData;
  };

  onFilter = (dataset, value) => {
    var newData = dataset;
    // Object.keys(value).map((val, key) => {
    if (value.length > 0) {
      newData = newData.filter((item) => {
        return this.compareItem(item, value);
      });
    }
    return newData;
  };

  compareItem = (item, value) => {
    // var flag = false;
    var flagCounter = 0;

    for (var i = 0; i < value.length; i++) {
      if (Object.values(value[i])[0] === item[Object.keys(value[i])[0]]) {
        flagCounter++;
      }
    }
    if (flagCounter == value.length) {
      return true;
    } else {
      return false;
    }
  };

  selectFilter = (items) => {
    var totalFilterValue = this.state.filter;
    var item = items.currentTarget.dataset;
    if (items.currentTarget.checked) {
      totalFilterValue[item.category] &&
      totalFilterValue[item.category].length > 0
        ? totalFilterValue[item.category].push(item.option)
        : (totalFilterValue[item.category] = [item.option]);
    } else {
      totalFilterValue[item.category] = totalFilterValue[item.category].filter(
        (obj) => {
          return obj !== item.option;
        }
      );
      if (totalFilterValue[item.category].length === 0) {
        delete totalFilterValue[item.category];
      }
    }
    this.onDoFilter(totalFilterValue);
  };
  filterPlainArray = (array, filters) => {
    const getValue = (value) =>
      typeof value === "string" ? value.toUpperCase() : value;
    const filterKeys = Object.keys(filters);
    return array.filter((item) => {
      // validates all filter criteria
      return filterKeys.every((key) => {
        // ignores an empty filter
        if (!filters[key].length) return true;
        return filters[key].find(
          (filter) => getValue(filter) === getValue(item[key])
        );
      });
    });
  };
  onDoFilter = (totalFilterValue) => {
    var data = "";
    this.setState({
      filter: totalFilterValue,
    });
    if (this.state.search) {
      data = this.searchFilterFunction(this.state.search, totalFilterValue);
    } else {
      data = this.state.tempData;
    }
    if (Object.keys(totalFilterValue).length > 0) {
      data = this.filterPlainArray(data, totalFilterValue);
    }
    this.setState({
      data: data,
      pageLength: data.length,
    });
  };
  handlePageChange = (pageNumber) => {
    // console.log(`active page is ${pageNumber}`);
    var nextLimit = pageNumber * 11;
    var newData = this.state.tempData.slice(nextLimit - 11, nextLimit);
    this.setState({ data: newData });
    this.setState({ activePage: pageNumber });
  };
  callFunct = (event, link) => {
    event.preventDefault();
    window.location.href = "#" + link;
    // alert(text);
  };
  render() {
    return (
      <div>
        <Helmet>
          <title>Products | Memory LCD - Sharp</title>
          <meta
            name="description"
            content="Ultra-low power consumption and high readability displays for almost any lighting environment."
          />
        </Helmet>
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
                Sharp's Memory-in-Pixel LCDs are the perfect solution for
                compact handheld, wearable, and other small-screen applications
                that require a battery. Choose from multiple sizes in 64-color,
                plus monochrome.
              </p>
              <p>
                View{" "}
                <a
                  href="/"
                  style={{ color: "#e61d24" }}
                  onClick={(event) => this.callFunct(event, "/MemoryInPixel")}
                >
                  {" "}
                  Memory in Pixel LCD product details.{" "}
                </a>
                <br />
                Learn more about{" "}
                <a
                  href="/"
                  style={{ color: "#e61d24" }}
                  onClick={(event) =>
                    this.callFunct(event, "/memory-in-pixel-lcds-technology")
                  }
                >
                  {" "}
                  Memory in Pixel LCD technology.{" "}
                </a>
              </p>

              <div>
                <Button size="lg" variant="outline-danger" href="#/contact">
                  Find a Rep
                </Button>
              </div>
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
              alt="Product Memory LCD"
              src={lcdImage}
              fluid
            />
          </div>
        </div>

        <div
          className="mobile-padding-40 col-md-12"
          style={{ padding: "0px 100px 40px 100px" }}
        >
          <div className="row">
            <div className="col-lg-3 " style={{ paddingBottom: 30 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
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
                  onClick={this.clearFilter}
                >
                  <span className="h6">Clear all</span>
                </Button>
              </div>
              <br />
              <Accordion>
                {filters.content.map((item, key) => {
                  return (
                    <Card className="noBorder" key={key}>
                      <Accordion.Toggle as={Card.Header} eventKey={key}>
                        <div className="row">
                          <div className="col-9">{item.title}</div>
                          <div
                            className="col-3"
                            style={{ textAlign: "right", paddingRight: 10 }}
                          >
                            <Button
                              aria-label={"Refine By " + item.title}
                              className="no-decor-button"
                              onClick={this.toggleSlider}
                            >
                              <ExpandMoreIcon />
                            </Button>
                          </div>
                        </div>
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={key}>
                        <Card.Body>
                          <Form role="group">
                            {item.values.map((content, key) => {
                              return (
                                <Form.Check
                                  key={key}
                                  type="checkbox"
                                  aria-label={item.title + " " + content}
                                  label={content}
                                  data-category={item.title}
                                  data-option={content}
                                  onChange={this.selectFilter}
                                />
                              );
                            })}
                          </Form>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  );
                })}
              </Accordion>
            </div>
            <div className="col-lg-9">
              <div className="row" style={{ justifyContent: "space-between" }}>
                <div ref={this.products} className="col-lg-6">
                  <h3>Products({this.state.pageLength})</h3>
                </div>
                <div className="col-lg-6">
                  <Form
                    inline
                    className="headerSearch"
                    onSubmit={this.onSubmit}
                    style={{ justifyContent: "flex-end", padding: 5 }}
                  >
                    {/* <InputGroup className="mb-2"> */}
                    <FormControl
                      variant="outline-danger"
                      type="text"
                      value={this.state.search}
                      placeholder="Search by Part No."
                      className="mr-sm-2"
                      onChange={this.handleTableSearch}
                    />
                    <HighlightOffIcon
                      className="clearIcon"
                      style={{
                        color: "#e61d24",
                        opacity: this.state.showClear ? 1 : 0,
                      }}
                      onClick={() => this.handleSearch("")}
                    />
                    {/* <InputGroup.Append onClick={() => alert("clear")}>
                        <InputGroup.Text>X</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup> */}
                  </Form>
                </div>
              </div>
              <br />
              {this.state.data.length > 0 ? (
                this.state.data.map((item, key) => {
                  return (
                    <Productitem
                      item={item}
                      key={key}
                      showModal={() => this.handleShow(item)}
                    />
                  );
                })
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
                    activePage={this.state.activePage}
                    itemsCountPerPage={11}
                    totalItemsCount={this.state.pageLength}
                    onChange={this.handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Productdetail
          show={this.state.show}
          handleClose={this.handleClose}
          items={this.state.items}
          parent="ML"
        />
        <Footer />
      </div>
    );
  }
}

export default Memory_lcd;
