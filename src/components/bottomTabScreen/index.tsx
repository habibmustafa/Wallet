import Container from "../container";
import "./style.scss";
import { Grid } from "@mui/material";
import { ReactComponent as Stat } from "~/assets/icons/stat.svg";
import { ReactComponent as Daily } from "~/assets/icons/daily.svg";
import { ReactComponent as Budget } from "~/assets/icons/budget.svg";
import { ReactComponent as Profile } from "~/assets/icons/profile.svg";
import { ReactComponent as Add } from "~/assets/icons/add.svg";
import Paragraph from "../paragraph";
import { useLocation, useNavigate } from "react-router-dom";

const BottomTabScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      id: 1,
      title: "Stat",
      path: "/",
      icon: <Stat />,
    },
    {
      id: 2,
      title: "Daily",
      path: "/daily",
      icon: <Daily />,
    },
    {
      id: 3,
      title: "",
      icon: (
        <div className="add-button">
          <Add width={"32px"} height={"32px"} viewBox="0 0 24 24" />
        </div>
      ),
    },
    {
      id: 4,
      title: "Budget",
      path: "/budget",
      icon: <Budget />,
    },
    {
      id: 5,
      title: "Profile",
      path: "/profile",
      icon: <Profile />,
    },
  ];

  return (
    <Container className="bottom-tab-screen">
      <Grid container>
        {items.map((item) => (
          <Grid
            item
            xs={2.4}
            className={`bottom-tab-screen-item ${
              location.pathname === item.path ? "active" : ""
            }`}
            key={item.id}
            onClick={() => {
              // setItems({ ...items, isActive: item.id });

              // @ts-ignore
              navigate(item?.path);
            }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"2px"}
            justifyContent={"space-around"}
          >
            {item.icon}
            <Paragraph>{item.title}</Paragraph>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BottomTabScreen;
