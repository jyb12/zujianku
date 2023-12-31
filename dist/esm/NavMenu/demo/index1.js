import React from 'react';
import Menu from '..';
export default function index1() {
  var data = [
    {
      title: '处理中心',
    },
    {
      title: '我的工作台',
      children: [
        {
          title: '选项一',
        },
        {
          title: '选项二',
        },
        {
          title: '选项三',
        },
        {
          title: '选项四',
          children: [
            {
              title: '选项一',
            },
            {
              title: '选项二',
            },
            {
              title: '选项三',
            },
          ],
        },
      ],
    },
    {
      title: '消息中心',
      disable: true,
    },
    {
      title: '订单管理',
    },
  ];
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement(Menu, {
      data: data,
      mode: 'horizontal',
    }),
  );
}
