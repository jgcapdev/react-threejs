import { Text as TextImpl } from '@react-three/drei';

const Text = ({ bold = false, anchorX = 'left', anchorY = 'top', textAlign = 'left', ...props }) => {
  const font = '/assets/fonts/Roboto-Regular.ttf';

  return <TextImpl anchorX={anchorX} anchorY={anchorY} textAlign={textAlign} font={font} {...props} />;
};

export default Text;
