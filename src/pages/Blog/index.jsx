import React, { useState, useEffect } from 'react';

// Komponen untuk animasi fade-in
const FadeIn = ({ children, delay = 0, duration = 2000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Apakah AI Akan Menggantikan Developer?
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Blog Content */}
        <article className="prose prose-invert max-w-none">
          <FadeIn>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Pertanyaan ini sering muncul sekarang. Apalagi setelah muncul banyak alat AI seperti ChatGPT atau Copilot yang bisa membantu menulis kode dengan cepat. Banyak orang mulai khawatir, "Apakah nanti pekerjaan sebagai developer akan hilang?"
            </p>
          </FadeIn>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-xl border-l-4 border-blue-500 mb-10">
            <p className="text-lg md:text-xl italic text-gray-200">
              "Jawaban saya singkat: tidak sepenuhnya. AI memang canggih, tapi bukan berarti bisa menggantikan peran manusia sepenuhnya."
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-16 mb-6 relative inline-block">
            <span className="relative z-10">
              AI Bisa Membantu, Tapi Tidak Menggantikan Semuanya
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-900/30 -z-0 rounded-full"></span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Saat ini, AI bisa melakukan banyak hal yang dulunya memakan waktu lama. Contohnya:
          </p>
          
          <ul className="space-y-3 mb-10">
            {["Membantu menulis kode", "Memberikan saran solusi saat terjadi error", "Menjelaskan potongan kode"].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Tapi tetap saja, AI hanya bisa melakukan hal-hal berdasarkan data yang sudah ada. AI belum bisa berpikir seperti manusia yang bisa memahami konteks, emosi, kebutuhan pengguna, atau membuat keputusan yang benar-benar kreatif dan sesuai kondisi nyata.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-16 mb-6 relative inline-block">
            <span className="relative z-10">
              Developer Masih Dibutuhkan
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-900/30 -z-0 rounded-full"></span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Seorang developer tidak hanya menulis kode. Mereka juga:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              {title: "Pemahaman Masalah", icon: "💡", desc: "Memahami masalah yang dihadapi pengguna"},
              {title: "Perencanaan", icon: "📝", desc: "Membuat rencana fitur yang efektif"},
              {title: "Kolaborasi", icon: "🤝", desc: "Berkomunikasi dengan tim lintas fungsi"},
              {title: "Arsitektur", icon: "🏗️", desc: "Merancang sistem yang efisien dan aman"}
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 hover:bg-gray-800/70 transition-all rounded-xl p-5 border border-gray-700/50">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Hal-hal seperti ini tidak bisa dikerjakan sepenuhnya oleh AI. AI tidak bisa duduk berdiskusi dalam rapat, memahami budaya pengguna, atau mengembangkan solusi kreatif untuk masalah baru yang belum pernah ada sebelumnya.
          </p>

          <div className="mt-16 mb-6">
            <span className="inline-block px-4 py-1 text-sm font-medium text-blue-400 bg-blue-900/30 rounded-full mb-3">
              My Opinion
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative inline-block">
              <span className="relative z-10">
                Jadi, Haruskah Kita Takut?
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-900/30 -z-0 rounded-full"></span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Menurut saya, tidak perlu takut. Justru kita harus beradaptasi. Gunakan AI sebagai alat bantu untuk mempercepat pekerjaan, bukan sebagai pesaing. Developer yang pintar adalah mereka yang bisa bekerja berdampingan dengan AI, bukan melawannya.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Kita masih perlu belajar logika pemrograman, memahami cara kerja sistem, dan tentu saja, belajar bekerja dengan tim.
          </p>

          <div className="relative bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl my-16 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold">!</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Kesimpulan</h3>
              </div>
              <p className="text-lg text-gray-200">
                AI bisa menulis kode, tapi belum bisa menggantikan pikiran dan perasaan manusia. Jadi, bukan saatnya takut. Ini saatnya kita terus belajar dan naik level. Bukan digantikan, tapi justru jadi lebih baik dengan bantuan AI.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-16 pt-8 border-t border-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold text-white">
                R
              </div>
              <div>
                <p className="font-medium text-white">Ditulis oleh Rakha</p>
                <p className="text-sm text-gray-400">20 Juni 2025</p>
              </div>
            </div>
            <div className="flex gap-3">
              {['#AI', '#Programming', '#FutureOfWork'].map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-blue-400 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Back to Home Button */}
        <div className="mt-16 text-center">
          <a 
            href="/" 
            className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-900/80 to-purple-900/80 hover:from-blue-900/90 hover:to-purple-900/90 text-white font-medium rounded-lg transition-all border border-blue-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
