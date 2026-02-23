"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import CarouselWithThumbs from "@/components/CarouselWithThumbs";
import Container from "@/components/Container";
import { getFlowerBySlug } from "@/lib/api";
import { Flower } from "@/lib/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [flower, setFlower] = useState<Flower | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getFlowerBySlug(id as string).then((data) => {
        setFlower(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="pt-28 pb-20">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 animate-pulse">
            <div className="w-full md:w-1/2 h-150 bg-gray-100 rounded-3xl" />
            <div className="w-full md:w-1/2 space-y-6">
              <div className="h-4 w-32 bg-gray-100 rounded" />
              <div className="h-12 w-full bg-gray-100 rounded" />
              <div className="h-6 w-48 bg-gray-100 rounded" />
              <div className="h-32 w-full bg-gray-100 rounded" />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (!flower) {
    return (
      <div className="pt-28 pb-20 text-center">
        <Container>
          <h1 className="text-3xl font-serif mb-4">Sản phẩm không tồn tại</h1>
          <Button onClick={() => router.push("/flowers")}>
            Quay lại cửa hàng
          </Button>
        </Container>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(flower.price);

  return (
    <div className="pt-28 pb-20">
      <Container>
        <Breadcrumb
          items={[
            { label: "Cửa hàng", path: "/flowers" },
            { label: flower.name },
          ]}
        />

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Product Image */}
          {/* <div className="w-full md:w-1/2">
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                width={800}
                height={800}
                src={flower.image}
                alt={flower.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-md text-gray-800 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">
                  {flower.category.replace("-", " ")}
                </span>
              </div>
            </div>
          </div> */}
          {/* <div className="w-full md:w-1/2">
            <Carousel className="w-full" opts={{ loop: true,  }}>
              <CarouselContent>
                {flower.gallery.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="p-0 overflow-clip">
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <Image
                            width={1200}
                            height={1200}
                            src={image}
                            alt={flower.name}
                            className="w-full h-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div> */}

          <CarouselWithThumbs
            imageName={flower.name}
            gallery={flower.gallery}
          />

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-2 leading-tight">
              {flower.name}
            </h1>
            <div className="flex items-center space-x-2 mb-6 text-rose-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-400 ml-2">(12 nhận xét)</span>
            </div>

            <p className="text-3xl font-bold text-rose-500 mb-8 tracking-tight">
              {formattedPrice}
            </p>

            <div className="prose prose-rose text-gray-500 max-w-none mb-10 leading-relaxed">
              <p>{flower.description}</p>
              <p className="mt-4">
                Chúng tôi cam kết sử dụng những bông hoa tươi nhất từ các nông
                trại địa phương, được cắm tỉ mỉ bởi những nghệ nhân giàu kinh
                nghiệm nhất.
              </p>
            </div>

            <div className="mb-10">
              <Button
                fullWidth
                size="lg"
                className="shadow-lg shadow-rose-100 py-5"
                // onClick={() => router.push("/contact")}
                onClick={() => {
                  window.open("https://zalo.me/0976848744", "_blank", "noopener,noreferrer");
                }}
              >
                Liên hệ đặt hoa ngay
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
                  Hoa tươi trong ngày
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-widest">
                  Giao nhanh 2h
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
