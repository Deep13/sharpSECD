"use client";

import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import {
  Divider,
  Link as MuiLink,
  Box,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";
import RoomIcon from "@mui/icons-material/Room";
import Footer from "@/components/Footer";
import QueryForm from "@/components/QueryForm";
import Mapsvg from "@/components/MapSvg";
import contact_data from "@/json/buy.json";

export default function Contact() {
  const [selectedAreaCode, setSelectedAreaCode] = useState("");
  const [selectedAreaTitle, setSelectedAreaTitle] = useState("");
  const [activeRegion, setActiveRegion] = useState("CA_NU");

  const handleRegionClick = useCallback((regionCode) => {
    setSelectedAreaCode(regionCode);
    setActiveRegion(regionCode);
  }, []);

  const handleRegionHover = useCallback((title) => {
    setSelectedAreaTitle(title);
  }, []);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Head>
        <title>
          Contact Sharp SECD – Speak with a Display Technology Expert
        </title>
        <meta
          name="description"
          content="Reach out to Sharp SECD for product inquiries, technical support, or to find your local sales representative. We’re here to help with your display needs."
        />
      </Head>

      <Box className="container mx-auto px-4 py-10">
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Map + Title */}
          <Grid item xs={12} lg={6}>
            <Typography variant="h5" sx={{ minHeight: "50px" }}>
              {selectedAreaTitle}
            </Typography>

            <Mapsvg
              activeRegion={activeRegion}
              onRegionClick={handleRegionClick}
              onRegionHover={handleRegionHover}
            />

            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 3, fontWeight: "medium" }}
            >
              Click on the Map to Find a Local Authorized Sales Representative
            </Typography>

            <Typography variant="body1" align="center" sx={{ mt: 1 }}>
              For inquiries from{" "}
              <MuiLink
                href="#"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleRegionClick("CA-CA");
                }}
              >
                Canada
              </MuiLink>
              ,{" "}
              <MuiLink
                href="#"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleRegionClick("MX-MX");
                }}
              >
                Mexico
              </MuiLink>{" "}
              or{" "}
              <MuiLink
                href="#"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleRegionClick("PR-PR");
                }}
              >
                Puerto Rico
              </MuiLink>
            </Typography>
          </Grid>

          {/* Contact Details */}
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: { xs: 2, lg: 6 },
            }}
          >
            {selectedAreaCode === null ? (
              <Typography variant="h4" align="center">
                {/* empty state */}
              </Typography>
            ) : selectedAreaCode in contact_data ? (
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  width: "100%",
                }}
              >
                {contact_data[selectedAreaCode].map((item, index) => (
                  <Box key={index}>
                    {index !== 0 && <Divider sx={{ my: 3 }} />}

                    <Typography
                      variant="h5"
                      color="primary"
                      sx={{ mb: 1, fontWeight: "bold" }}
                    >
                      {item.title}
                    </Typography>

                    <Typography variant="h6" color="primary">
                      {item.company}
                    </Typography>

                    <Grid container spacing={2} sx={{ pt: 3 }}>
                      {/* Website */}
                      <Grid item xs={12} md={4}>
                        <Box display="flex" alignItems="flex-start">
                          <LanguageIcon fontSize="large" sx={{ mr: 1 }} />
                          <Box>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              fontWeight="bold"
                            >
                              Visit Us
                            </Typography>
                            {item.website ? (
                              <MuiLink
                                href={`https://${item.website}`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {item.website}
                              </MuiLink>
                            ) : (
                              "NA"
                            )}
                          </Box>
                        </Box>
                      </Grid>

                      {/* Phone */}
                      <Grid item xs={12} md={4}>
                        <Box display="flex" alignItems="flex-start">
                          <PhonelinkRingIcon fontSize="large" sx={{ mr: 1 }} />
                          <Box>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              fontWeight="bold"
                            >
                              Call Us
                            </Typography>
                            <MuiLink href={`tel:${item.phone}`}>
                              {item.phone}
                            </MuiLink>
                          </Box>
                        </Box>
                      </Grid>

                      {/* Email */}
                      <Grid item xs={12} md={4}>
                        <Box display="flex" alignItems="flex-start">
                          <RoomIcon fontSize="large" sx={{ mr: 1 }} />
                          <Box>
                            <Typography
                              variant="subtitle1"
                              color="text.secondary"
                              fontWeight="bold"
                            >
                              Contact Us
                            </Typography>
                            <MuiLink href={`mailto:${item.email}`}>
                              {item.email}
                            </MuiLink>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Paper>
            ) : (
              <Typography variant="h4" align="center" color="error">
                We don't have an office here currently.
              </Typography>
            )}
          </Grid>
        </Grid>

        {/* Query Form */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Let's get in touch
            </Typography>
            <QueryForm subject="General query" />
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5">Contact a SHARP Expert</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                If you have questions about our products, solutions and
                services, we’re happy to help. Please fill in the contact form
                and we’ll get back to you as soon as possible.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}
