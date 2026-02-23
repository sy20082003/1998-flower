import Container from "@/components/Container";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="pt-28 pb-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-bold tracking-widest uppercase text-xs mb-3">
              Về chúng tôi
            </span>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Câu Chuyện Của Bloom & Petals
            </h1>
            <div className="w-16 h-1 bg-rose-200 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                width={600}
                height={600}
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800"
                alt="Our workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 italic">
                &quot;Nơi hoa nở, hy vọng cũng nở theo.&quot;
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Khởi đầu từ một góc nhỏ trên con phố yên tĩnh, Bloom & Petals ra
                đời với mong muốn mang vẻ đẹp thuần khiết của thiên nhiên vào
                từng ngóc ngách không gian sống. Chúng tôi tin rằng mỗi bông hoa
                đều mang trong mình một ngôn ngữ riêng, có khả năng chữa lành và
                kết nối những tâm hồn.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Hành trình của chúng tôi là sự kết hợp giữa nghệ thuật cắm hoa
                hiện đại và sự trân trọng giá trị truyền thống. Từng nhành hoa,
                chiếc lá đều được lựa chọn tỉ mỉ để tạo nên những tác phẩm không
                chỉ đẹp mà còn mang đậm dấu ấn cá nhân của người tặng.
              </p>
            </div>
          </div>

          <div className="bg-rose-50 rounded-[3rem] p-12 md:p-20 text-center mb-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">
              Sứ Mệnh Của Chúng Tôi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-rose-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 uppercase tracking-wider text-sm">
                  Chất lượng tuyệt đối
                </h3>
                <p className="text-gray-500 text-sm">
                  Chỉ sử dụng hoa tươi loại một, được nhập khẩu và tuyển chọn từ
                  các vùng hoa danh tiếng.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-rose-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 uppercase tracking-wider text-sm">
                  Thiết kế độc bản
                </h3>
                <p className="text-gray-500 text-sm">
                  Mỗi sản phẩm là một tác phẩm nghệ thuật riêng biệt, không
                  trùng lặp và đầy cảm hứng.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto text-rose-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 uppercase tracking-wider text-sm">
                  Tận tâm phục vụ
                </h3>
                <p className="text-gray-500 text-sm">
                  Chúng tôi lắng nghe câu chuyện của bạn để gửi gắm tình cảm
                  trọn vẹn vào từng bó hoa.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Nghệ Nhân Của Chúng Tôi
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Lana Nguyễn",
                  role: "Creative Director",
                  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
                },
                {
                  name: "Minh Anh",
                  role: "Master Florist",
                  img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=300",
                },
                {
                  name: "Elena Trần",
                  role: "Bridal Expert",
                  img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=300",
                },
                {
                  name: "Quốc Bảo",
                  role: "Operations Manager",
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
                },
              ].map((member, i) => (
                <div key={i} className="group">
                  <div className="aspect-3/4 rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-all">
                    <Image
                      width={200}
                      height={200}
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-gray-800">{member.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
