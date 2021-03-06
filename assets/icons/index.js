import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function SVGImage({name}) {
  const svgOptions = {
    'add': require('./add'),
    'arrow-back': require('./arrow-back'),
    'dices': require('./dices'),
    'reload': require('./reload'),
    'remove': require('./remove'),
    'remove-disabled': require('./remove-disabled'),
    'settings': require('./settings')
  }

  const svgFile = svgOptions[name];
  const svgXML = svgFile.xml;

  const SVG = () => <SvgXml xml={svgXML} height='100%' width='100%'/>;

  return <SVG/>;
}
