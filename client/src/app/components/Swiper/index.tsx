"use client";

import {
  Swiper as SwiperComponent,
  SwiperProps,
  SwiperSlide as SwiperSlideComponent,
  SwiperSlideProps
} from "swiper/react";
import { Pagination } from "swiper/modules";

export const Swiper = (props: React.PropsWithChildren<SwiperProps>) => (
  <SwiperComponent {...props}>{props.children}</SwiperComponent>
);

export const SwiperSlide = (
  props: React.PropsWithChildren<SwiperSlideProps>
) => <SwiperSlideComponent {...props} />;

export { Pagination };
