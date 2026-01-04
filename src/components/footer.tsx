"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Youtube, Twitter, Instagram, Linkedin, Mail, Phone, Clock } from "lucide-react";

export function Footer() {
  // Bg-[#191369] (Deep Indigo) ở chế độ tối tương ứng với --dark-bg-secondary.
  // Tuy nhiên, vì footer thường có màu nền cố định, ta sẽ dùng bg-secondary
  // và đảm bảo rằng màu này được định nghĩa chuẩn (Hoặc dùng một class custom nếu muốn màu cố định 100% không đổi).
  // Dựa trên thiết kế, phần nội dung chính của footer có màu nền là #191369 (Dark Secondary BG).
  
  return (
    // Sử dụng bg-secondary cho phần nội dung chính của Footer
    <footer className="bg-secondary text-txt-secondary transition-colors duration-300 text-sm pt-12">
      <div className="container mx-auto px-4">
        
        {/* === TOP SECTION: 5 CỘT === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* CỘT 1: LOGO & GIỚI THIỆU */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              {/* Logo Icon (Đã được điều chỉnh để hoạt động với Dark/Light theme) */}
              <div className="w-10 h-10 bg-txt-primary rounded flex items-center justify-center transition-colors group-hover:bg-primary">
                {/* Sử dụng bg-main để đảm bảo màu bên trong icon đổi theo theme */}
                <div className="w-6 h-6 bg-main" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}></div>
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-txt-primary leading-none">
                  Evo<span className="text-primary">Ticket</span>
                </span>
                {/* text-txt-muted sẽ đảm bảo màu đổi theo theme */}
                <span className="text-[10px] text-txt-muted">
                  Nền tảng vé sự kiện Blockchain & AI<br/>đầu tiên tại Việt Nam.
                </span>
              </div>
            </Link>
            <p className="mb-4 text-xs leading-relaxed text-txt-secondary">
              Mua vé dễ dàng - Bảo mật tuyệt đối - Trải nghiệm kỷ vật số NFT
            </p>
          </div>

          {/* CỘT 2: VỀ CHÚNG TÔI */}
          <div>
            <h3 className="font-bold text-txt-primary uppercase mb-4 text-xs tracking-wider">Về chúng tôi</h3>
            <ul className="space-y-2.5">
              {['Câu chuyện EvoTicket', 'Tuyển dụng (Careers)', 'EvoTicket Blog', 'Khu vực báo chí', 'Chương trình Affiliate'].map((item) => (
                <li key={item}>
                  {/* hover:text-primary tự động chuyển đổi giữa light/dark hover color */}
                  <Link href="#" className="hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: TRỢ GIÚP */}
          <div>
            <h3 className="font-bold text-txt-primary uppercase mb-4 text-xs tracking-wider">Trợ giúp</h3>
            <ul className="space-y-2.5">
              {['Trung tâm trợ giúp', 'Câu hỏi thường gặp (FAQ)', 'Chính sách bảo mật', 'Điều khoản sử dụng', 'Chính sách đổi trả & Hoàn tiền', 'Cơ chế giải quyết tranh chấp'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 4: ĐỐI TÁC & SỰ KIỆN */}
          <div>
            <h3 className="font-bold text-txt-primary uppercase mb-4 text-xs tracking-wider">Đối tác & Sự kiện</h3>
            <ul className="space-y-2.5">
              {['Dành cho Ban tổ chức (B2B)', 'Đăng ký bán vé sự kiện', 'Vé Concert / Show nhạc', 'Vé Workshop / Hội thảo', 'Vé Thể thao / E-sport'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 5: KẾT NỐI VỚI CHÚNG TÔI */}
          <div>
            <h3 className="font-bold text-txt-primary uppercase mb-4 text-xs tracking-wider">Kết nối với chúng tôi</h3>
            <div className="flex gap-4 mb-4">
              {[Youtube, Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-txt-muted hover:text-primary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-txt-muted"/> Hotline: <span className="font-semibold text-txt-primary">1900 636 686</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-txt-muted"/> Thời gian: 8:00 - 23:00
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-txt-muted"/> Email: <span className="text-txt-primary">support@evoticket.vn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* === MIDDLE SECTION: THANH TOÁN & CHỨNG NHẬN === */}
        {/* border-t border-border tự động đổi màu viền */}
        <div className="border-t border-border py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Đối tác thanh toán */}
            <div>
              <h3 className="font-bold text-txt-primary uppercase mb-4 text-xs tracking-wider">Đối tác thanh toán</h3>
              <div className="flex flex-wrap gap-4 items-center">
                {/* Nền thanh toán luôn là bg-white/bg-surface, viền border-border */}
                <div className="bg-surface p-2 rounded border border-border w-24 h-12 flex items-center justify-center">
                    <span className="font-bold text-blue-600 italic">VietQR</span>
                </div>
                <div className="bg-surface p-2 rounded border border-border w-24 h-12 flex items-center justify-center">
                    <span className="font-bold text-red-600">VNPay</span>
                </div>
                <div className="bg-surface p-2 rounded-full border border-border w-10 h-10 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-blue-500">Zalo</span>
                </div>
                 <div className="bg-surface p-2 rounded-full border border-border w-10 h-10 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-pink-500">MoMo</span>
                </div>
              </div>
            </div>

            {/* Chứng nhận */}
            <div className="md:text-right">
                <h3 className="font-bold text-txt-primary uppercase mb-4 text-xs tracking-wider md:justify-end flex">Chứng nhận</h3>
                <div className="flex md:justify-end">
                  {/* Placeholder cho ảnh Bộ Công Thương */}
                  {/* Sử dụng text-txt-muted và border-border */}
                  <div className="w-32 h-12 bg-contain bg-no-repeat bg-center border border-dashed border-border rounded flex items-center justify-center text-[10px] text-center px-1 text-txt-muted">
                      [Logo Bộ Công Thương]
                  </div>
                </div>
            </div>

          </div>
        </div>

      </div>

      {/* === BOTTOM BAR: COPYRIGHT (Màu tím cố định - Primary Color) === */}
      <div className="bg-primary text-white/90 py-6 text-[11px] leading-relaxed">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Left */}
          <div>
            <p className="font-semibold">CompanyName @ 202X. All rights reserved.</p>
          </div>

          {/* Right */}
          <div className="md:text-right opacity-80">
            <p className="font-bold uppercase">Công ty Cổ phần Công nghệ EvoTicket Việt Nam</p>
            <p>Địa chỉ: Tòa nhà Innovation, Khu Công nghệ cao, TP. Thủ Đức, TP. Hồ Chí Minh.</p>
            <p>Giấy CNĐKDN số: 031xxxxxxx do Sở Kế hoạch và Đầu tư TP.HCM cấp ngày 15/09/2025.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}