import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function SVGImage({name}) {
  const svgOptions = {
    'white': require('./mtg-white'),
    'blue': require('./mtg-blue'),
    'black': require('./mtg-black'),
    'red': require('./mtg-red'),
    'green': require('./mtg-green'),
    'colorless': require('./mtg-colorless'),
    'poison': require('./mtg-poison')
  }

  const svgFile = svgOptions[name];
  const svgXML = svgFile.xml;

  const SVG = () => <SvgXml xml={svgXML} height='100%' width='100%'/>;

  return <SVG/>;
}
