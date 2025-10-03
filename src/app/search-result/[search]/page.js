"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button, Form, FormControl } from "react-bootstrap";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AOS from "aos";
import products from "@/json/SIteContent";
import "aos/dist/aos.css";
import Head from "next/head";

export default function SearchResultsPage() {
  const { search } = useParams();

  const [searchState, setSearchState] = useState("");
  const [showClear, setShowClear] = useState(false);
  const [aProducts, setAProducts] = useState([]);
  const [aPages, setAPages] = useState([]);
  const [total, setTotal] = useState(0);
  const [aTempProducts, setATempProducts] = useState([]);
  const [aTempPages, setATempPages] = useState([]);

  // ✅ Initialize AOS only on client
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (search) {
      const data = products.content;
      const foundProducts = [];
      const foundPages = [];

      data.forEach((value) => {
        if (value.content.toLowerCase().includes(search.toLowerCase())) {
          if (value.type === "Page") {
            foundPages.push(value);
          } else {
            foundProducts.push(value);
          }
        }
      });

      setAProducts(foundProducts);
      setAPages(foundPages);
      setATempProducts(foundProducts);
      setATempPages(foundPages);
      setTotal(foundProducts.length + foundPages.length);
      setSearchState(search);
      setShowClear(search.length > 0);
    }
  }, [search]);

  const handleTableSearch = (e) => {
    const value = e.target.value;
    setSearchState(value);
    setShowClear(value.length > 0);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = products.content;
    const foundProducts = [];
    const foundPages = [];

    if (searchState) {
      data.forEach((value) => {
        if (value.content.toLowerCase().includes(searchState.toLowerCase())) {
          if (value.type === "Page") {
            foundPages.push(value);
          } else {
            foundProducts.push(value);
          }
        }
      });
    } else {
      foundProducts.push(...aTempProducts);
      foundPages.push(...aTempPages);
    }

    setAProducts(foundProducts);
    setAPages(foundPages);
    setTotal(foundProducts.length + foundPages.length);
  };

  const onClear = () => {
    setSearchState("");
    setAProducts(aTempProducts);
    setAPages(aTempPages);
    setTotal(aTempProducts.length + aTempPages.length);
    setShowClear(false);
  };

  return (
    <div>
      <Head>
        <title>Search results - Sharp</title>
      </Head>

      <div
        className="row container-row-85 padding-top-30 padding-bottom-30"
        style={{ justifyContent: "space-between" }}
        role="main"
        id="main-content"
        tabIndex={0}
      >
        <h1>Search Results ({total})</h1>
        <Form
          className="d-flex" // ✅ react-bootstrap prefers className over inline
          onSubmit={onSubmit}
          style={{ justifyContent: "flex-end", padding: 5 }}
        >
          <FormControl
            type="text"
            value={searchState}
            placeholder="Search Results"
            className="mr-sm-2"
            onChange={handleTableSearch}
          />
          <HighlightOffIcon
            className="clearIcon"
            style={{
              color: "#e61d24",
              opacity: showClear ? 1 : 0,
              cursor: "pointer",
            }}
            onClick={onClear}
          />
        </Form>
      </div>

      {aProducts.length === 0 && aPages.length === 0 && (
        <div style={{ color: "#e61d24", textAlign: "center" }}>
          <h3>No results found</h3>
        </div>
      )}

      {aProducts.length > 0 && (
        <div
          className="row container-row-85 padding-top-30 padding-bottom-30"
          style={{ flexDirection: "column", paddingLeft: 20 }}
        >
          <h2>Products</h2>
          {aProducts.map((item, key) => (
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
                href={`#${item.link}?search=${item.header}`}
              >
                {item.header}
              </Button>
            </div>
          ))}
        </div>
      )}

      {aPages.length > 0 && (
        <div
          className="row container-row-85 padding-top-30 padding-bottom-30"
          style={{ flexDirection: "column", paddingLeft: 20 }}
        >
          <h2>Pages</h2>
          {aPages.map((item, key) => (
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
                href={`#${item.link}`}
              >
                {item.header}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
