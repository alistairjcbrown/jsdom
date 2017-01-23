"use strict";

const jsdom = require("../..").jsdom;

const zeroDimensions = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
};

exports["A node should have zero dimensions for bounding rectangle"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  t.deepEqual(element.getBoundingClientRect(), zeroDimensions);
  t.done();
};

exports["A node should have zero dimensions for all rectangles"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  t.deepEqual(element.getClientRects(), [zeroDimensions]);
  t.done();
};

exports["A node should have zero client top"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  t.strictEqual(element.clientTop, 0);
  t.done();
};

exports["A node should have zero client left"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  t.strictEqual(element.clientLeft, 0);
  t.done();
};

exports["A node should have zero client width"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  t.strictEqual(element.clientWidth, 0);
  t.done();
};

exports["A node should have zero client height"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  t.strictEqual(element.clientHeight, 0);
  t.done();
};

exports["A node should have zero scroll width"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  t.strictEqual(element.scrollWidth, 0);
  t.done();
};

exports["A node should have zero scroll height"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  t.strictEqual(element.scrollHeight, 0);
  t.done();
};

exports["A node should have zero scroll top"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  t.strictEqual(element.scrollTop, 0);
  t.done();
};

exports["A node should have zero scroll left"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  t.strictEqual(element.scrollLeft, 0);
  t.done();
};

exports["A node should have settable scroll top"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  element.scrollTop = 10;
  t.strictEqual(element.scrollTop, 10);
  t.done();
};

exports["A node should have settable scroll left"] = t => {
  const doc = jsdom("<div id='1'>1</div>");
  const element = doc.getElementById("1");
  element.scrollLeft = 10;
  t.strictEqual(element.scrollLeft, 10);
  t.done();
};
