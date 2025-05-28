import React from "react";
import { Typography, Box, Card, CardContent, Grid, Link } from "@mui/material";


// Mock data for the newsletter
const newsletterData = {
  title: "AgriSoko Connect News",
  updates: [
    {
      headline: "Market Trends",
      content:
        "Current market trends show a rise in demand for organic produce. Prices for organic vegetables have increased by 10% over the last month.",
      Link: "https://www.minagri.gov.rw/updates/news-details/minagri-2022-highlights"
    },
    {
      headline: "Product Highlights",
      content:
        "This month's featured product is organic rice from the UBUMWE cooperative. Known for its high quality and rich nutrients, it's becoming a favorite among health-conscious consumers.",
    },
    {
      headline: "Buyer Tips",
      content:
        "Ensure the quality of products by requesting recent lab test results. This helps in verifying the authenticity of organic labels.",
    },
    {
      headline: "Platform Updates",
      content:
        "We have introduced a new feature that allows you to track your order in real-time. You can now see the exact location of your shipment on the platform.",
    },
  ],
};

const Newsletter = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: 4,
          textAlign: "center",
          color: "#6d8c54",
        }}
      >
        {newsletterData.title}
      </Typography>
      <Grid container spacing={2}>
        {newsletterData.updates.map((update, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                width: "100%",
                height: {
                  xs: 350,
                  sm: 300,
                  md: 200,
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Link
                  href={update.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  color="inherit"
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {update.headline}
                  </Typography>
                  <Typography variant="body1">{update.content}</Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Newsletter;
