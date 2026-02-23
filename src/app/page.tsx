"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import FlowerCard from "@/components/FlowerCard";
import { getFeaturedFlowers } from "@/lib/api";
import { Flower } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [bestSellers, setBestSellers] = useState<Flower[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getFeaturedFlowers().then((data) => {
      setBestSellers(data);
      setLoading(false);
    });
  }, []);

  const occasions = [
    {
      name: "Tiệc Cưới",
      slug: "wedding",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Sinh Nhật",
      slug: "birthday",
      img: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=765&auto=format&fit=crop",
    },
    {
      name: "Khai Trương",
      slug: "grand-opening",
      img: "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=1171&auto=format&fit=crop",
    },
    {
      name: "Theo Mùa",
      slug: "seasonal",
      img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const commitments = [
    {
      title: "Hoa Tươi 100%",
      desc: "Hoa được nhập mới mỗi ngày từ các nông trại uy tín nhất.",
      icon: "🌸",
    },
    {
      title: "Giao Hỏa Tốc",
      desc: "Cam kết giao hoa tận nơi trong vòng 60-120 phút nội thành.",
      icon: "🚚",
    },
    {
      title: "Thiết Kế Riêng",
      desc: "Mỗi bó hoa là một tác phẩm nghệ thuật độc bản dành cho bạn.",
      icon: "🎨",
    },
    {
      title: "Bảo Hành Tươi",
      desc: "Đổi trả miễn phí nếu hoa không đạt chất lượng như cam kết.",
      icon: "✨",
    },
  ];

  const flowerTypes = [
    {
      name: "Hoa Hồng",
      count: "120+ mẫu",
      img: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=300",
    },
    {
      name: "Hoa Lan",
      count: "45+ mẫu",
      img: "https://images.unsplash.com/photo-1605996370592-b6f7a81e382e?q=80&w=735&auto=format&fit=crop",
    },
    {
      name: "Hoa Tulip",
      count: "30+ mẫu",
      img: "https://images.unsplash.com/photo-1488928741225-2aaf732c96cc?q=80&w=1170&auto=format&fit=crop",
    },
    {
      name: "Hoa Hướng Dương",
      count: "25+ mẫu",
      img: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&q=80&w=300",
    },
  ];

  const reviews = [
    {
      name: "Chị Mai Anh",
      content:
        "Hoa ở đây rất tươi, thiết kế sang trọng đúng ý mình. Giao hàng cũng rất đúng giờ.",
      role: "Khách hàng thân thiết",
    },
    {
      name: "Anh Tuấn",
      content:
        "Dịch vụ đặt hoa cưới tuyệt vời. Nhân viên tư vấn rất nhiệt tình và chuyên nghiệp.",
      role: "Khách hàng dự án",
    },
    {
      name: "Chị Lan Phương",
      content: "Mẫu mã đa dạng, giá cả hợp lý so với chất lượng hoa nhập khẩu.",
      role: "Khách hàng lẻ",
    },
  ];

  const faqs = [
    {
      q: "Shop có giao hoa vào ngày lễ không?",
      a: "Chúng tôi phục vụ 24/7, kể cả ngày lễ và chủ nhật để đảm bảo bạn luôn có hoa đẹp đúng lúc.",
    },
    {
      q: "Làm thế nào để giữ hoa tươi lâu?",
      a: "Thay nước sạch mỗi ngày, cắt gốc xéo và để hoa ở nơi thoáng mát, tránh ánh nắng trực tiếp.",
    },
    {
      q: "Shop có viết thiệp chúc mừng kèm theo không?",
      a: "Tất cả đơn hàng đều được tặng kèm thiệp hoặc banner chúc mừng in theo yêu cầu.",
    },
  ];

  return (
    <main className="pt-0">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-150 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            width={1920}
            height={800}
            src="https://images.unsplash.com/photo-1462456490601-4f7e60c96c5e?q=80&w=1074&auto=format&fit=crop"
            alt="Hero floral background"
            className="w-full h-full object-cover brightness-[0.8]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/10 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Vẻ Đẹp <br />
              <span className="italic text-rose-100">Của Những</span> <br />
              Cánh Hoa
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Khám phá bộ sưu tập hoa tươi nghệ thuật được thiết kế tinh xảo cho
              mọi khoảnh khắc quý giá trong cuộc sống của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
              <Button size="lg" onClick={() => router.push("/flowers")}>
                Xem bộ sưu tập
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Hoa theo dịp */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="text-rose-500 font-bold tracking-widest uppercase text-xs mb-3">
              Tìm hoa nhanh
            </span>
            <h2 className="text-4xl font-bold text-gray-800">
              Hoa Theo Dịp Ý Nghĩa
            </h2>
            <div className="w-16 h-1 bg-rose-200 mt-4 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occ) => (
              <div
                key={occ.slug}
                onClick={() => router.push("/flowers")}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <Image
                  width={400}
                  height={400}
                  src={occ.img}
                  alt={occ.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {occ.name}
                  </h3>
                  <span className="text-white/80 text-sm flex items-center group-hover:translate-x-2 transition-transform">
                    Khám phá ngay{" "}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Sản phẩm bán chạy */}
      <section className="py-24 bg-[#FCF9F7]">
        <Container>
          <div className="flex flex-col items-center mb-16">
            <span className="text-rose-500 font-bold tracking-widest uppercase text-xs mb-3">
              Bán chạy nhất
            </span>
            <h2 className="text-4xl font-bold text-gray-800 text-center">
              Tình Yêu Trong Từng Mẫu Hoa
            </h2>
            <div className="w-16 h-1 bg-rose-200 mt-4 rounded-full" />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-white rounded-2xl h-112.5 border border-gray-100"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {bestSellers.slice(0, 4).map((flower) => (
                <FlowerCard key={flower.id} flower={flower} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* 4. Cam kết */}
      <section className="py-24 bg-white border-y border-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {commitments.map((item, idx) => (
              <div
                key={idx}
                className="text-center group p-6 rounded-3xl hover:bg-rose-50 transition-colors"
              >
                <div className="text-5xl mb-6 inline-flex items-center justify-center bg-white w-20 h-20 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Hoa theo loại */}
      {/* <section className="py-24 bg-[#FCF9F7]">
        <Container>
          <div className="text-center mb-16">
            <span className="text-rose-500 font-bold tracking-widest uppercase text-xs mb-3">
              Đa dạng lựa chọn
            </span>
            <h2 className="text-4xl font-bold text-gray-800">
              Hoa Theo Chủng Loại
            </h2>
            <div className="w-16 h-1 bg-rose-200 mt-4 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {flowerTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-lg transition-all text-center"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                  <Image
                    width={400}
                    height={400}
                    src={type.img}
                    alt={type.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-gray-800 text-lg">{type.name}</h4>
                <p className="text-rose-400 text-sm mt-1">{type.count}</p>
              </div>
            ))}
          </div>
        </Container>
      </section> */}

      {/* 6. Review */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Khách Hàng Nói Gì?
            </h2>
            <div className="w-16 h-1 bg-rose-200 mt-4 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-8 rounded-4xl bg-[#FCF9F7] border border-gray-100 italic relative"
              >
                <svg
                  className="absolute top-6 left-6 w-8 h-8 text-rose-100"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8v8H6v4h4v4H6a2 2 0 01-2-2V10a2 2 0 012-2h4m12 0v8h-4v4h4v4h-4a2 2 0 01-2-2V10a2 2 0 012-2h4"></path>
                </svg>
                <p className="text-gray-600 mb-6 mt-4 relative z-10">
                  &quot;{rev.content}&quot;
                </p>
                <div className="flex items-center space-x-3 not-italic">
                  <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center text-rose-700 font-bold">
                    {rev.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 text-sm">
                      {rev.name}
                    </h5>
                    <p className="text-xs text-gray-400">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Nội dung SEO */}
      <section className="py-24 bg-rose-50/30">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-rose text-gray-600 leading-relaxed text-justify">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
              Dịch Vụ Giao Hoa Tươi Uy Tín Tại Bloom & Petals
            </h2>
            <p>
              Bạn đang tìm kiếm một địa chỉ đặt hoa tươi uy tín để gửi gắm tình
              cảm đến người thân, bạn bè hay đối tác?{" "}
              <strong>Bloom & Petals</strong> tự hào là hệ thống điện hoa hàng
              đầu, chuyên cung cấp các mẫu hoa thiết kế cao cấp phù hợp cho mọi
              dịp lễ như sinh nhật, khai trương, kỷ niệm ngày cưới hay hoa chia
              buồn. Với hàng ngàn mẫu hoa đa dạng từ hoa hồng, hoa lan, hoa
              tulip đến các loại hoa nhập khẩu từ Hà Lan, Ecuador, chúng tôi cam
              kết mang đến cho khách hàng trải nghiệm mua sắm tuyệt vời nhất.
            </p>
            <p>
              Tại Bloom & Petals, mỗi sản phẩm đều được các nghệ nhân cắm hoa
              tâm huyết thực hiện tỉ mỉ. Chúng tôi thấu hiểu rằng hoa không chỉ
              là quà tặng mà còn là thông điệp yêu thương. Vì vậy, dịch vụ giao
              hoa tận nơi của chúng tôi luôn đảm bảo tính kịp thời và bảo quản
              hoa ở điều kiện tốt nhất trong suốt quá trình vận chuyển. Dù bạn ở
              đâu, chỉ với vài thao tác đặt hàng online, món quà ý nghĩa nhất sẽ
              được chuyển đến tận tay người nhận một cách hoàn hảo nhất.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">
              Câu Hỏi Thường Gặp
            </h2>
            <div className="w-16 h-1 bg-rose-200 mt-4 mx-auto rounded-full" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:border-rose-200 transition-colors"
              >
                <div className="bg-gray-50 p-6 font-bold text-gray-800 flex justify-between items-center">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-rose-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                <div className="p-6 bg-white text-gray-500 text-sm">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. CTA Section */}
      <section className="py-24">
        <Container>
          <div className="bg-rose-100 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <h2 className="text-4xl md:text-5xl font-bold text-rose-800 mb-6 relative z-10">
              Bạn muốn thiết kế hoa riêng
            </h2>
            <p className="text-rose-700/80 mb-10 text-lg relative z-10 max-w-xl mx-auto">
              Hãy để chúng tôi lắng nghe câu chuyện của bạn và tạo ra món quà
              hoàn hảo nhất theo yêu cầu cá nhân.
            </p>
            <Button
              size="lg"
              className="bg-rose-600 text-white hover:bg-rose-700 relative z-10 shadow-xl"
              onClick={() => router.push("/contact")}
            >
              Liên Hệ Ngay
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default HomePage;
