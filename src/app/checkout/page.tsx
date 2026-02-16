"use client";

import { useCartStore } from "@/store/cart";
import { ChevronRight, CreditCard, ShoppingBag, Truck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
    const { items, total } = useCartStore();
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        phone: "",
    });

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        alert("This is a demo checkout. In a real app, this would process the payment.");
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
                <ShoppingBag className="w-16 h-16 text-zinc-700 mb-6" />
                <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                <Link href="/" className="text-blue-400 hover:text-blue-300">
                    Return to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-zinc-500 mb-8">
                    <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
                    <ChevronRight className="w-4 h-4 mx-2 rotate-180" />
                    <span className="text-white">الدفع</span>
                </nav>

                <h1 className="text-3xl font-bold mb-8">الدفع</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Forms */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Shipping Info */}
                        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Truck className="w-5 h-5 text-blue-400" />
                                معلومات التوصيل
                            </h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm text-zinc-400 mb-1">الاسم الكامل</label>
                                    <input
                                        type="text"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="محمد علي"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm text-zinc-400 mb-1">العنوان</label>
                                    <input
                                        type="text"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="حي الجامعة، شارع الربيع"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-zinc-400 mb-1">المدينة</label>
                                    <input
                                        type="text"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="بغداد"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-zinc-400 mb-1">رقم الهاتف</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="0770 XXX XXXX"
                                        dir="ltr"
                                    />
                                </div>
                            </form>
                        </section>

                        {/* Payment Info */}
                        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-purple-400" />
                                طريقة الدفع
                            </h2>

                            <div className="space-y-4">
                                <div className="p-4 border border-zinc-700 bg-zinc-950/50 rounded-lg flex items-center justify-between cursor-pointer hover:border-blue-500 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full border border-blue-500 bg-blue-500"></div>
                                        <span>الدفع عند الاستلام</span>
                                    </div>
                                    <Truck className="w-5 h-5 text-zinc-500" />
                                </div>

                                <div className="p-4 border border-zinc-800 bg-zinc-950/30 rounded-lg flex items-center justify-between opacity-60 cursor-not-allowed">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full border border-zinc-600"></div>
                                        <span>زين كاش (قريباً)</span>
                                    </div>
                                    <div className="bg-zinc-800 text-xs px-2 py-1 rounded">غير متوفر</div>
                                </div>

                                <div className="p-4 border border-zinc-800 bg-zinc-950/30 rounded-lg flex items-center justify-between opacity-60 cursor-not-allowed">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full border border-zinc-600"></div>
                                        <span>بطاقة الائتمان (قريباً)</span>
                                    </div>
                                    <div className="bg-zinc-800 text-xs px-2 py-1 rounded">غير متوفر</div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sticky top-24">
                            <h2 className="text-xl font-bold mb-6">ملخص الطلب</h2>

                            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                {items.map(item => (
                                    <div key={item.id} className="flex justify-between text-sm">
                                        <div className="flex gap-3">
                                            <span className="text-zinc-500">{item.quantity}x</span>
                                            <span>{item.name}</span>
                                        </div>
                                        <span className="text-zinc-300">{(item.price * item.quantity).toLocaleString()} د.ع</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-zinc-800 pt-4 space-y-2 text-sm">
                                <div className="flex justify-between text-zinc-400">
                                    <span>المجموع الفرعي</span>
                                    <span>{total().toLocaleString()} د.ع</span>
                                </div>
                                <div className="flex justify-between text-zinc-400">
                                    <span>الشحن</span>
                                    <span>5,000 د.ع</span>
                                </div>
                                <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-zinc-800 mt-4">
                                    <span>الإجمالي</span>
                                    <span>{(total() + 5000).toLocaleString()} د.ع</span>
                                </div>
                            </div>

                            <button
                                onClick={handlePlaceOrder}
                                className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                            >
                                تأكيد الطلب
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
