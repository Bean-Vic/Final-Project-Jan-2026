import React from 'react';

export const BaseComponent = (props) => {
  return (
      <h1>Hello {props.name}</h1>
  )
};

//我想实现一个 HOC 高阶组件，作用是增强基础组件，在组件挂载的时候，会控制台输出日志，记录保留传的参数

const logHOCExample = (Component) => {
  const NewComponent = (props) => {
    console.log('传入的参数是: ', props);
    // if (isAdmin) {
    //   return Admin page
    // } else
    return <Component {...props} />
  }

  return NewComponent;
}

export const EnhancedComponent = logHOCExample(BaseComponent);