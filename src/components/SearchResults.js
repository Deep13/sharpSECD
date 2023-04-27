import React, { Component } from "react";
// import { useParams } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AOS from "aos";
import products from "../json/SIteContent";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
AOS.init();
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      show: false,
      data: [],
      total: 0,
      aProducts: [],
      aPages: [],
      aTempProducts: [],
      aTempPages: [],
      search: "",
      filter: [],
      searchQuery: "",
      showClear: false,
    };
  }
  handleTableSearch = (value) => {
    var text = value.currentTarget.value;
    this.handleSearch(text);
  };
  onSubmit = (event) => {
    event.preventDefault();
    var data = products.content;
    var aProducts = [];
    var aPages = [];
    if (this.state.search) {
      var search = this.state.search;
      // var data = this.state.aProducts.concat(this.state.aPages);
      // data.forEach((value) => {
      //   if (value.content.toLowerCase().includes(search.toLowerCase())) {
      //     if (value.type === "Page") {
      //       aPages.push(value);
      //     } else {
      //       aProducts.push(value);
      //     }
      //   }
      // });
      data.forEach((value) => {
        if (value.content.toLowerCase().includes(search.toLowerCase())) {
          if (value.type === "Page") {
            aPages.push(value);
          } else {
            aProducts.push(value);
          }
        }
      });
      this.setState({
        aProducts: aProducts,
        aPages: aPages,
        total: aProducts.length + aPages.length,
      });
    } else {
      aProducts = this.state.aTempProducts;
      aPages = this.state.aTempPages;
      this.setState({
        aProducts: aProducts,
        aPages: aPages,
        total: aProducts.length + aPages.length,
      });
    }
  };
  handleSearch = (value) => {
    var text = value;
    if (text.length > 0) {
      this.setState({ showClear: true });
    } else {
      this.setState({ showClear: false });
    }

    this.setState({ search: text });
  };
  onClear = () => {
    this.handleSearch("");
    var aProducts = this.state.aTempProducts;
    var aPages = this.state.aTempPages;
    this.setState({
      aProducts: aProducts,
      aPages: aPages,
      total: aProducts.length + aPages.length,
    });
  };
  // componentWillReceiveProps(next) {
  //   // debugger;
  //   var search = next.match.params.search;
  //   //console.log("props", next);
  //   if (search) {
  //     var data = products.content;
  //     var aProducts = [];
  //     var aPages = [];
  //     //   var searchedData = data.filter((obj) =>
  //     //     obj.content.toLowerCase().includes(search.toLowerCase())
  //     //   );
  //     data.forEach((value) => {
  //       if (value.content.toLowerCase().includes(search.toLowerCase())) {
  //         if (value.type === "Page") {
  //           aPages.push(value);
  //         } else {
  //           aProducts.push(value);
  //         }
  //       }
  //     });
  //     this.setState({
  //       aProducts: aProducts,
  //       aPages: aPages,
  //       aTempProducts: aProducts,
  //       aTempPages: aPages,
  //       total: aProducts.length + aPages.length,
  //     });
  //     //   this.scrollToRef(this.products);
  //     //   this.handleSearch(search);
  //   }
  // }
  componentDidMount() {
    const { search } = this.props.match.params;
    // debugger;
    // console.log(search);
    if (search) {
      var data = products.content;
      var aProducts = [];
      var aPages = [];
      data.forEach((value) => {
        if (value.content.toLowerCase().includes(search.toLowerCase())) {
          if (value.type === "Page") {
            aPages.push(value);
          } else {
            aProducts.push(value);
          }
        }
      });
      this.setState({
        aProducts: aProducts,
        aPages: aPages,
        aTempProducts: aProducts,
        aTempPages: aPages,
        total: aProducts.length + aPages.length,
      });
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Search results - Sharp</title>
        </Helmet>
        <div
          className="row container-row-85 padding-top-30 padding-bottom-30"
          style={{ justifyContent: "space-between" }}
          role="main"
          id="main-content"
          tabIndex={0}
        >
          <h1>Search Results ({this.state.total})</h1>
          <Form
            inline
            onSubmit={this.onSubmit}
            style={{ justifyContent: "flex-end", padding: 5 }}
          >
            {/* <InputGroup className="mb-2"> */}
            <FormControl
              variant="outline-danger"
              type="text"
              value={this.state.search}
              placeholder="Search Results"
              className="mr-sm-2"
              onChange={this.handleTableSearch}
            />
            <HighlightOffIcon
              className="clearIcon"
              style={{
                color: "#e61d24",
                opacity: this.state.showClear ? 1 : 0,
              }}
              onClick={this.onClear}
            />
            {/* <InputGroup.Append onClick={() => alert("clear")}>
                        <InputGroup.Text>X</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup> */}
          </Form>
        </div>
        {this.state.aProducts.length === 0 && this.state.aPages.length === 0 && (
          <div style={{ color: "#e61d24", textAlign: "center" }}>
            <h3>No results found</h3>
          </div>
        )}
        {this.state.aProducts.length > 0 && (
          <div
            className="row container-row-85 padding-top-30 padding-bottom-30"
            style={{ flexDirection: "column", paddingLeft: 20 }}
          >
            <h2>Products</h2>
            <div style={{}}>
              {this.state.aProducts.map((item, key) => {
                return (
                  <div key={key} style={{ padding: 10, float: "left" }}>
                    <Button
                      className="titleLink"
                      style={{
                        color: "#e61d24",
                        fontSize: "1.8rem",
                        padding: 10,
                        boxShadow: "2px 2px 10px -2px black",
                        borderRadius: 15,
                      }}
                      aria-label={item.header}
                      variant="link"
                      href={"#" + item.link + "?search=" + item.header}
                    >
                      {item.header}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {this.state.aPages.length > 0 && (
          <div
            className="row container-row-85 padding-top-30 padding-bottom-30"
            style={{ flexDirection: "column", paddingLeft: 20 }}
          >
            <h2>Pages</h2>

            {this.state.aPages.map((item, key) => {
              return (
                <div key={key} style={{ padding: 10 }}>
                  <Button
                    className="titleLink"
                    style={{
                      color: "#e61d24",
                      fontSize: "1.8rem",
                      padding: 10,
                    }}
                    aria-label={item.header}
                    variant="link"
                    href={"#" + item.link}
                  >
                    {item.header}
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default SearchResults;
