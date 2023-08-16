/* eslint-disable max-len */
import React from "react";
import type { SkMatrix } from "@shopify/react-native-skia";
import {
  Skia,
  vec,
  rrect,
  RoundedRect,
  Group,
  LinearGradient,
  Path,
  rect,
} from "@shopify/react-native-skia";
import type { SharedValue } from "react-native-reanimated";

const width = 102;
const height = 35;
export const LocationStickerDimensions = { width, height };

interface LocationStickerProps {
  matrix: SharedValue<SkMatrix> | SkMatrix;
}

export const LocationSticker = ({ matrix }: LocationStickerProps) => {
  return (
    <Group matrix={matrix}>
      <Path
        path="M4.81617 0C2.16704 0 0 2.8635 0 6.36299V28.636C0 32.1365 2.16704 35 4.81617 35H97.1838C99.833 35 102 32.1365 102 28.636V6.36299C102 2.8635 99.833 0 97.1838 0H4.81617Z"
        color="white"
      />
      <Group>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(0, height)}
          colors={["#2803E5", "#911CAE"]}
        />
        <Path path="M16.0008 5C13.879 5 11.8437 5.84301 10.3433 7.34305C8.84313 8.84343 8 10.8784 8 13C8 21 16.0008 29 16.0008 29C16.0008 29 24.0016 21 24.0016 13C24.0016 10.8784 23.1585 8.84334 21.6583 7.34305C20.1578 5.84305 18.1226 5 16.0008 5ZM16.0008 16.1571C15.1618 16.1571 14.3567 15.8238 13.7636 15.23C13.1705 14.6367 12.8372 13.8316 12.8379 12.9927C12.8383 12.1534 13.1724 11.3491 13.7662 10.7562C14.3601 10.1635 15.1652 9.83091 16.0046 9.83168C16.8435 9.83278 17.648 10.1672 18.2407 10.7613C18.833 11.3555 19.1652 12.1609 19.1638 12.9998C19.1623 13.8376 18.8285 14.6408 18.2354 15.2327C17.6424 15.8246 16.8387 16.1571 16.0008 16.1571Z" />
        <Path path="M41.77 26.31C41.77 26.51 41.7 26.68 41.56 26.82C41.42 26.94 41.26 27 41.08 27H32.59C32.39 27 32.22 26.94 32.08 26.82C31.96 26.68 31.9 26.51 31.9 26.31V25.65C31.9 25.33 31.96 25.04 32.08 24.78L39.4 8.00997H32.8C32.62 8.00997 32.46 7.94997 32.32 7.82997C32.18 7.68997 32.11 7.51997 32.11 7.31997V6.65997C32.11 6.45997 32.18 6.29997 32.32 6.17997C32.46 6.05997 32.62 5.99997 32.8 5.99997H41.05C41.27 5.99997 41.44 6.05997 41.56 6.17997C41.7 6.29997 41.77 6.45997 41.77 6.65997V7.31997C41.77 7.49997 41.73 7.68997 41.65 7.88997L34.27 24.99H41.08C41.26 24.99 41.42 25.06 41.56 25.2C41.7 25.34 41.77 25.5 41.77 25.68V26.31Z" />
        <Path path="M48.1265 27C46.8665 27 45.8665 26.63 45.1265 25.89C44.4065 25.15 44.0465 24.08 44.0465 22.68V12.99C44.0465 12.79 44.1065 12.63 44.2265 12.51C44.3665 12.37 44.5365 12.3 44.7365 12.3H45.5465C45.7465 12.3 45.9065 12.37 46.0265 12.51C46.1665 12.63 46.2365 12.79 46.2365 12.99V22.65C46.2365 23.37 46.4165 23.95 46.7765 24.39C47.1365 24.83 47.6765 25.05 48.3965 25.05H48.9665C49.6865 25.05 50.2265 24.83 50.5865 24.39C50.9665 23.95 51.1565 23.37 51.1565 22.65V12.99C51.1565 12.79 51.2165 12.63 51.3365 12.51C51.4765 12.37 51.6465 12.3 51.8465 12.3H52.6565C52.8565 12.3 53.0165 12.37 53.1365 12.51C53.2765 12.63 53.3465 12.79 53.3465 12.99V26.31C53.3465 26.51 53.2765 26.68 53.1365 26.82C53.0165 26.94 52.8565 27 52.6565 27H51.8465C51.6465 27 51.4765 26.94 51.3365 26.82C51.2165 26.68 51.1565 26.51 51.1565 26.31V25.74C50.4365 26.58 49.4265 27 48.1265 27ZM47.8265 9.29997C47.8265 9.49997 47.7565 9.66997 47.6165 9.80997C47.4965 9.92997 47.3365 9.98997 47.1365 9.98997H46.0265C45.8465 9.98997 45.6865 9.92997 45.5465 9.80997C45.4065 9.66997 45.3365 9.49997 45.3365 9.29997V7.85997C45.3365 7.65997 45.4065 7.49997 45.5465 7.37997C45.6865 7.25997 45.8465 7.19997 46.0265 7.19997H47.1365C47.3365 7.19997 47.4965 7.25997 47.6165 7.37997C47.7565 7.49997 47.8265 7.65997 47.8265 7.85997V9.29997ZM52.0565 9.29997C52.0565 9.49997 51.9865 9.66997 51.8465 9.80997C51.7265 9.92997 51.5665 9.98997 51.3665 9.98997H50.2565C50.0765 9.98997 49.9165 9.92997 49.7765 9.80997C49.6365 9.66997 49.5665 9.49997 49.5665 9.29997V7.85997C49.5665 7.65997 49.6365 7.49997 49.7765 7.37997C49.9165 7.25997 50.0765 7.19997 50.2565 7.19997H51.3665C51.5665 7.19997 51.7265 7.25997 51.8465 7.37997C51.9865 7.49997 52.0565 7.65997 52.0565 7.85997V9.29997Z" />
        <Path path="M62.0135 14.49C61.4935 14.49 61.0235 14.59 60.6035 14.79C60.2035 14.99 59.8735 15.26 59.6135 15.6C59.3335 15.96 59.1435 16.39 59.0435 16.89C58.9435 17.37 58.8935 17.91 58.8935 18.51V26.31C58.8935 26.51 58.8235 26.68 58.6835 26.82C58.5635 26.94 58.4035 27 58.2035 27H57.3935C57.1935 27 57.0235 26.94 56.8835 26.82C56.7635 26.68 56.7035 26.51 56.7035 26.31V12.99C56.7035 12.79 56.7635 12.63 56.8835 12.51C57.0235 12.37 57.1935 12.3 57.3935 12.3H58.2035C58.4035 12.3 58.5635 12.37 58.6835 12.51C58.8235 12.63 58.8935 12.79 58.8935 12.99V14.25C59.2935 13.55 59.7935 13.05 60.3935 12.75C60.9935 12.45 61.6935 12.3 62.4935 12.3H62.9135C63.1135 12.3 63.2735 12.37 63.3935 12.51C63.5335 12.65 63.6035 12.81 63.6035 12.99V13.8C63.6035 14 63.5335 14.17 63.3935 14.31C63.2735 14.43 63.1135 14.49 62.9135 14.49H62.0135Z" />
        <Path path="M67.9462 26.31C67.9462 26.51 67.8762 26.68 67.7362 26.82C67.6162 26.94 67.4562 27 67.2562 27H66.4462C66.2462 27 66.0762 26.94 65.9362 26.82C65.8162 26.68 65.7562 26.51 65.7562 26.31V12.99C65.7562 12.79 65.8162 12.63 65.9362 12.51C66.0762 12.37 66.2462 12.3 66.4462 12.3H67.2562C67.4562 12.3 67.6162 12.37 67.7362 12.51C67.8762 12.63 67.9462 12.79 67.9462 12.99V26.31ZM68.0962 8.96997C68.0962 9.16997 68.0262 9.33997 67.8862 9.47997C67.7662 9.59997 67.6062 9.65997 67.4062 9.65997H66.2962C66.0962 9.65997 65.9262 9.59997 65.7862 9.47997C65.6662 9.33997 65.6062 9.16997 65.6062 8.96997V6.98997C65.6062 6.78997 65.6662 6.62997 65.7862 6.50997C65.9262 6.36997 66.0962 6.29997 66.2962 6.29997H67.4062C67.6062 6.29997 67.7662 6.36997 67.8862 6.50997C68.0262 6.62997 68.0962 6.78997 68.0962 6.98997V8.96997Z" />
        <Path path="M80.5633 22.59C80.5633 23.99 80.1933 25.08 79.4533 25.86C78.7133 26.62 77.7133 27 76.4533 27H75.1933C73.9333 27 72.9333 26.62 72.1933 25.86C71.4533 25.08 71.0833 23.99 71.0833 22.59V16.71C71.0833 15.31 71.4533 14.23 72.1933 13.47C72.9333 12.69 73.9333 12.3 75.1933 12.3H76.4533C77.7133 12.3 78.7133 12.69 79.4533 13.47C80.1933 14.23 80.5633 15.31 80.5633 16.71V17.25C80.5633 17.45 80.4933 17.62 80.3533 17.76C80.2333 17.88 80.0733 17.94 79.8733 17.94H79.0633C78.8633 17.94 78.6933 17.88 78.5533 17.76C78.4333 17.62 78.3733 17.45 78.3733 17.25V16.65C78.3733 15.93 78.1933 15.35 77.8333 14.91C77.4733 14.47 76.9333 14.25 76.2133 14.25H75.4333C74.7133 14.25 74.1733 14.47 73.8133 14.91C73.4533 15.35 73.2733 15.93 73.2733 16.65V22.65C73.2733 23.37 73.4533 23.95 73.8133 24.39C74.1733 24.83 74.7133 25.05 75.4333 25.05H76.2133C76.9333 25.05 77.4733 24.83 77.8333 24.39C78.1933 23.95 78.3733 23.37 78.3733 22.65V21.45C78.3733 21.25 78.4333 21.09 78.5533 20.97C78.6933 20.83 78.8633 20.76 79.0633 20.76H79.8733C80.0733 20.76 80.2333 20.83 80.3533 20.97C80.4933 21.09 80.5633 21.25 80.5633 21.45V22.59Z" />
        <Path path="M88.7601 12.3H88.9401C90.2001 12.3 91.2001 12.67 91.9401 13.41C92.6801 14.15 93.0501 15.22 93.0501 16.62V26.31C93.0501 26.51 92.9801 26.68 92.8401 26.82C92.7201 26.94 92.5601 27 92.3601 27H91.5501C91.3501 27 91.1801 26.94 91.0401 26.82C90.9201 26.68 90.8601 26.51 90.8601 26.31V16.65C90.8601 15.93 90.6801 15.35 90.3201 14.91C89.9601 14.47 89.4201 14.25 88.7001 14.25H87.9501C87.2301 14.25 86.6801 14.47 86.3001 14.91C85.9401 15.35 85.7601 15.93 85.7601 16.65V26.31C85.7601 26.51 85.6901 26.68 85.5501 26.82C85.4301 26.94 85.2701 27 85.0701 27H84.2601C84.0601 27 83.8901 26.94 83.7501 26.82C83.6301 26.68 83.5701 26.51 83.5701 26.31V6.68997C83.5701 6.48997 83.6301 6.32997 83.7501 6.20997C83.8901 6.06997 84.0601 5.99997 84.2601 5.99997H85.0701C85.2701 5.99997 85.4301 6.06997 85.5501 6.20997C85.6901 6.32997 85.7601 6.48997 85.7601 6.68997V13.56C86.4801 12.72 87.4801 12.3 88.7601 12.3Z" />
      </Group>
    </Group>
  );
};
