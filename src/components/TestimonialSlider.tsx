'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import Testimonial from "@/components/Testimonial";
import 'swiper/swiper.min.css';
import {INotionTestimonial} from "@/lib/notion";

type TestimonialSliderProps = {
    testimonials: INotionTestimonial[];
}
export default async function TestimonialSlider({testimonials}: TestimonialSliderProps){

    return (
        <Swiper slidesPerView={1}>
            {
                testimonials.map((testimonial, index) => (
                    <SwiperSlide key={`testimonial-${index}`}>
                        <Testimonial name={testimonial.Nombre.title[0].plain_text}
                                     occupation={testimonial.Ocupacion.rich_text[0].plain_text}
                                     message={testimonial.Mensaje.rich_text[0].plain_text}
                                     image={testimonial.Foto.files[0].file.url}
                                     email={testimonial.Email.email}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )

}
