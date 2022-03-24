import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

class Sider extends React.Component {
  state = {
    theme: "light",
    current: "1",
  };

  changeTheme = (value) => {
    this.setState({
      theme: value ? "light" : "dark",
    });
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{
            maxWidth: 256,
            height: "100%",
            position: "fixed",
            zIndex: 1,
            top: 60,
            left: 0,
            overflow: "auto",
            overflowX: "hidden",
            paddingTop: 20,
            mariginRight: 300,
          }}
          defaultOpenKeys={["sub1", "sub2", "sub4"]}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="1">
              <Link to="/home/profile"> Profile</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/home/booklist">List of books</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/home/wishlist">Wish list</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/home/PurchasedItems">Purchases</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Navigation Two"
          >
            <Menu.Item key="5">
              <Link to="/home/posts">Posts</Link>
            </Menu.Item>
            <Menu.Item key="6">ggggg</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            icon={<SettingOutlined />}
            title="Navigation Three"
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </>
    );
  }
}

export default Sider;
