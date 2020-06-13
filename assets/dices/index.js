import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function SVGImage({name}) {
  const svgOptions = {
    1: require('./dice-one'),
    2: require('./dice-two'),
    3: require('./dice-three'),
    4: require('./dice-four'),
    5: require('./dice-five'),
    6: require('./dice-six'),
  }

  const svgFile = svgOptions[name];
  const svgXML = svgFile.xml;

  const SVG = () => <SvgXml xml={svgXML} height='100%' width='100%'/>;

  return <SVG/>;
}
