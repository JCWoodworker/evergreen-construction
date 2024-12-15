import { Box, Button, Divider, Link, Typography } from '@mui/material';

const ColorPaletteExamples: React.FC = () => {
  return (
    <Box>
      <Typography variant="h2">Color Palette Examples</Typography>

      <Typography variant="h3" sx={{ color: '#004338' }}>Deep Forest Green Heading</Typography>

      <Typography variant="body1" sx={{ color: '#757575' }}>
        This text is using Warm Gray for improved readability.
      </Typography>

      <Button
        sx={{
          backgroundColor: '#004338',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '20px',
        }}
      >
        Call to Action
      </Button>

      <Box
        sx={{
          backgroundColor: '#E8E2D5',
          padding: '20px',
          marginTop: '20px',
        }}
      >
        <Typography variant="h4">Section with Natural Beige Background</Typography>
        <Typography variant="body1">
          This section demonstrates how the Natural Beige color can be used for
          backgrounds to create visual interest and separate content.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: '#757575', margin: '20px 0' }} />

      <Link href="#" sx={{ color: '#CAEBF2' }}>
        Sky Blue Link
      </Link>
    </Box>
  );
};

export default ColorPaletteExamples;