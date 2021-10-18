import { Component } from "react";
import { Provider } from "react-redux";

import "./app.scss";
import store from "./store/index";

class App extends Component {
  componentDidMount() {
    const updateManager = Taro.getUpdateManager();

    updateManager.onCheckForUpdate((res) => {
      console.log(res);
    });

    updateManager.onUpdateReady(() => {
      Taro.showModal({
        title: "更新提示",
        content: "新版本准备就绪，是否重启应用？",
        success: (res) => {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });
    updateManager.onUpdateFailed((res) => {
      console.log(res);
    });
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App
