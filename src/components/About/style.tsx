import { styled } from "@/styles/stitches.config";
import backgroundAbout from "@/public/static/img/background/images.jpg";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  backgroundImage: `url(${backgroundAbout})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "$grey3",

  borderBottom: "2px solid var(--colors-grey5)",

  "& img": {
    width: "50px",
    height: "auto",
  },
  "& .divImg": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: "transparent",
  color: "$grey3",
  padding: "20px 5% 0px 5%",

  "& p": {
    margin: "0",
    padding: "0",
    fontSize: "24px",
    lineHeight: "1.5",
    marginBottom: "16px",
    color: "$grey2",
    fontSizeAdjust: "2rem",
  },
});

export const Paragraph = styled("p", {
  margin: "0",
  padding: "0",
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "16px",
});
