import {
    DashboardOutlined,
    FormOutlined,
    ProfileOutlined,
    UserOutlined,
    HighlightOutlined,
    WarningOutlined,
    TableOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import React from "react";
  import "../App.css";
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };
  const items = [
    getItem("Dashboard", "sub3", <DashboardOutlined />, [
      getItem(
        "Item 1",
        "g1",
        null,
        [getItem("Option 1", "1"), getItem("Option 2", "2")],
        "group"
      ),
      getItem(
        "Item 2",
        "g2",
        null,
        [getItem("Option 3", "3"), getItem("Option 4", "4")],
        "group"
      ),
    ]),
    getItem("Form", "sub2", <FormOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),
    getItem("List", "sub4", <TableOutlined />, [
      getItem("Search List", "search_list", "", [
        getItem(
          "",
          "g1",
          null,
          [
            getItem("Basic List", "basic_list"),
            getItem("Card List", "card_list"),
          ],
          "group"
        ),
      ]),
    ]),
    getItem("Profile", "sub5", <ProfileOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    getItem("Result", "sub6", <TableOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    getItem("Exception", "sub7", <WarningOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    getItem("Account", "sub8", <UserOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    getItem("Graphic Editor", "sub9", <HighlightOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    getItem(
      "Group",
      "grp",
      null,
      [getItem("Option 13", "13"), getItem("Option 14", "14")],
      "group"
    ),
  ];
  const Sidebar = () => {
    const onClick = (e) => {
      console.log("click ", e);
    };
    return (
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        className="sideBar"
        style={{width: '200px', textAlign: 'left' }}
      />
    );
  };
  export default Sidebar;