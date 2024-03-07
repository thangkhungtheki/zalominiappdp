import React from "react";
import { Page, Button, Box, Text, Icon } from "zmp-ui";

export default function ButtonTest(props: any) {
  return (
    <>
      <div className="section-container">
        <Text.Title size="small">Variant: level</Text.Title>
        <Box mt={2}>
          <Text>Có 3 level button cơ bản: Primary, Secondary, Tertiary</Text>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Primary
          </Text>
        </Box>
        <Box mt={6}>
          <Button variant="primary" size="large">
            Button
          </Button>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Secondary
          </Text>
        </Box>
        <Box mt={6}>
          <Button variant="secondary" size="large">
            Button
          </Button>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Tertiary
          </Text>
        </Box>
        <Box mt={6}>
          <Button variant="tertiary" size="large">
            Button
          </Button>
        </Box>
      </div>
      <div className="section-container">
        <Text.Title size="small">
          Type Primary / Secondary / Tertiary
        </Text.Title>

        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Highlight
          </Text>
        </Box>
        <Box flex flexWrap>
          <Box mr={2} mt={6}>
            <Button variant="primary" type="highlight" size="large">
              Button
            </Button>
          </Box>
          <Box mr={2} mt={6}>
            <Button variant="secondary" type="highlight" size="large">
              Button
            </Button>
          </Box>
          <Box mr={2} mt={6}>
            <Button variant="tertiary" type="highlight" size="large">
              Button
            </Button>
          </Box>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Danger
          </Text>
        </Box>
        <Box flex flexWrap>
          <Box mr={2} mt={6}>
            <Button variant="primary" type="danger" size="large">
              Button
            </Button>
          </Box>
          <Box mr={2} mt={6}>
            <Button variant="secondary" type="danger" size="large">
              Button
            </Button>
          </Box>
          <Box mr={2} mt={6}>
            <Button variant="tertiary" type="danger" size="large">
              Button
            </Button>
          </Box>
        </Box>
        <Box mt={6} flex flexWrap>
          <Text className="italic-sub-title" size="xSmall">
            Neutral
          </Text>
        </Box>
        <Box flex flexWrap>
          <Box mr={2} mt={6}>
            <Button variant="primary" type="neutral" size="large">
              Button
            </Button>
          </Box>
          <Box mr={2} mt={6}>
            <Button variant="secondary" type="neutral" size="large">
              Button
            </Button>
          </Box>
          <Box mr={2} mt={6}>
            <Button variant="tertiary" type="neutral" size="large">
              Button
            </Button>
          </Box>
        </Box>
      </div>
      <div className="section-container">
        <Text.Title size="small">Size</Text.Title>

        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Large
          </Text>
        </Box>
        <Box mt={6}>
          <Button size="large">Button</Button>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Medium
          </Text>
        </Box>
        <Box mt={6}>
          <Button size="medium">Button</Button>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Small
          </Text>
        </Box>
        <Box mt={6}>
          <Button size="small">Button</Button>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Full-width
          </Text>
        </Box>
        <Box mt={6}>
          <Button fullWidth>Button</Button>
        </Box>
      </div>
      <div className="section-container">
        <Text.Title size="small">Anatomy</Text.Title>

        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Nút với biểu tượng ở đầu
          </Text>
        </Box>
        <Box mt={6}>
          <Button size="large" prefixIcon={<Icon icon="zi-plus" />}>
            Button
          </Button>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Nút với biểu tượng ở sau
          </Text>
        </Box>
        <Box mt={6}>
          <Button size="large" suffixIcon={<Icon icon="zi-arrow-right" />}>
            Button
          </Button>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Nút
          </Text>
        </Box>
        <Box mt={6}>
          <Button size="large">Button</Button>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Nút biểu tượng
          </Text>
        </Box>
        <Box mt={6}>
          <Button size="large" icon={<Icon icon="zi-plus" />}>
            Button
          </Button>
        </Box>
      </div>
      <div className="section-container">
        <Text.Title size="small">State</Text.Title>

        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Default
          </Text>
        </Box>
        <Box mt={6}>
          <Button size="large">Button</Button>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Pressed
          </Text>
        </Box>
        <Box mt={6}>
          <Button size="large">Button</Button>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Loading
          </Text>
        </Box>
        <Box mt={6}>
          <Button size="large" loading>
            Button
          </Button>
        </Box>
        <Box mt={6}>
          <Text className="italic-sub-title" size="xSmall">
            Disabled
          </Text>
        </Box>
        <Box mt={6}>
          <Button size="large" disabled>
            Button
          </Button>
        </Box>
      </div>
    </>
  );
}
