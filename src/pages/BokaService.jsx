import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Calendar, Clock, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isBefore, isWeekend, startOfWeek, endOfWeek } from 'date-fns';
import { sv } from 'date-fns/locale';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';

const services = [
    { value: 'motorservice', label: 'Motorservice' },
    { value: 'reparation', label: 'Reparation' },
    { value: 'sommarforvaring', label: 'Sommarförvaring' },
    { value: 'vinterforvaring', label: 'Vinterförvaring' },
    { value: 'tvatt', label: 'Tvätt' },
    { value: 'annat', label: 'Annat' }
];

export default function BokaService() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [campaignTitle, setCampaignTitle] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        campaign: ''
    });

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const campaign = params.get('campaign');
        const title = params.get('title');
        if (campaign) {
            setFormData(prev => ({ ...prev, campaign }));
            if (title) setCampaignTitle(decodeURIComponent(title));
        }
    }, [location.search]);

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
    const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

    const weekDays = ['Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör', 'Sön'];

    const isDateDisabled = (date) => {
        return isBefore(date, new Date()) || isWeekend(date);
    };

    const handleDateClick = (date) => {
        if (!isDateDisabled(date) && isSameMonth(date, currentMonth)) {
            setSelectedDate(date);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await base44.functions.invoke('submitBookingRequest', {
                ...formData,
                preferred_date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Booking error:', error);
            alert('Något gick fel. Försök igen eller ring oss direkt.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-[#1e3a5f]">
                <div className="max-w-7xl mx-auto px-6">
                    <Link 
                        to={createPageUrl('Home')} 
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Tillbaka till startsidan
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                            <Calendar className="w-7 h-7 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Serviceförfrågan
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/80 text-lg max-w-3xl"
                    >
                        Välj ett datum och beskriv vad du behöver hjälp med så återkommer vi med en bekräftelse.
                    </motion.p>
                </div>
            </section>

            {/* Booking Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Calendar */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Välj datum</h2>
                            
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                                {/* Month Navigation */}
                                <div className="flex items-center justify-between mb-6">
                                    <button
                                        onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-slate-600" />
                                    </button>
                                    <h3 className="text-lg font-semibold text-[#1e3a5f] capitalize">
                                        {format(currentMonth, 'MMMM yyyy', { locale: sv })}
                                    </h3>
                                    <button
                                        onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5 text-slate-600" />
                                    </button>
                                </div>

                                {/* Weekday Headers */}
                                <div className="grid grid-cols-7 gap-1 mb-2">
                                    {weekDays.map((day) => (
                                        <div key={day} className="text-center text-sm font-medium text-slate-500 py-2">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                {/* Calendar Days */}
                                <div className="grid grid-cols-7 gap-1">
                                    {days.map((day, index) => {
                                        const disabled = isDateDisabled(day);
                                        const isCurrentMonth = isSameMonth(day, currentMonth);
                                        const isSelected = selectedDate && format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                                        const today = isToday(day);

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => handleDateClick(day)}
                                                disabled={disabled || !isCurrentMonth}
                                                className={`
                                                    aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all
                                                    ${!isCurrentMonth ? 'text-slate-300' : ''}
                                                    ${isCurrentMonth && !disabled ? 'hover:bg-[#1e3a5f]/10 cursor-pointer' : ''}
                                                    ${disabled && isCurrentMonth ? 'text-slate-300 cursor-not-allowed' : ''}
                                                    ${isCurrentMonth && !disabled ? 'text-slate-700' : ''}
                                                    ${isSelected ? 'bg-[#1e3a5f] text-white hover:bg-[#1e3a5f]' : ''}
                                                    ${today && !isSelected ? 'ring-2 ring-[#c41e3a]' : ''}
                                                `}
                                            >
                                                {format(day, 'd')}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Legend */}
                                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-sm text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded bg-[#1e3a5f]" />
                                        <span>Valt datum</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded ring-2 ring-[#c41e3a]" />
                                        <span>Idag</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded bg-slate-200" />
                                        <span>Ej tillgänglig</span>
                                    </div>
                                </div>
                            </div>

                            {selectedDate && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 p-4 bg-[#1e3a5f]/5 rounded-xl flex items-center gap-3"
                                >
                                    <Clock className="w-5 h-5 text-[#1e3a5f]" />
                                    <span className="text-[#1e3a5f] font-medium">
                                        Valt datum: {format(selectedDate, 'd MMMM yyyy', { locale: sv })}
                                    </span>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Booking Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Dina uppgifter</h2>

                            {formData.campaign && (
                                <div className="mb-5 p-4 bg-[#c41e3a]/8 border border-[#c41e3a]/20 rounded-xl flex items-center gap-3">
                                    <span className="text-lg">🎯</span>
                                    <p className="text-sm text-[#c41e3a] font-medium">
                                        Du bokar via kampanjen <strong>{campaignTitle || formData.campaign}</strong>
                                    </p>
                                </div>
                            )}

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-16 px-8 bg-slate-50 rounded-2xl border border-slate-200"
                                >
                                    <div className="text-5xl mb-4">✅</div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Förfrågan skickad!</h3>
                                    <p className="text-slate-600">Vi återkommer inom kort på <strong>{formData.email}</strong></p>
                                </motion.div>
                            ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <Label htmlFor="service" className="text-slate-700">Typ av service</Label>
                                    <Select 
                                        value={formData.service} 
                                        onValueChange={(value) => setFormData({...formData, service: value})}
                                    >
                                        <SelectTrigger className="mt-1">
                                            <SelectValue placeholder="Välj tjänst" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {services.map((service) => (
                                                <SelectItem key={service.value} value={service.value}>
                                                    {service.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="name" className="text-slate-700">Namn</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        placeholder="Ditt namn"
                                        className="mt-1"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="email" className="text-slate-700">E-post</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        placeholder="din@email.se"
                                        className="mt-1"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="phone" className="text-slate-700">Telefon</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        placeholder="070-123 45 67"
                                        className="mt-1"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="message" className="text-slate-700">Meddelande</Label>
                                    <Textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        placeholder="Beskriv vad du behöver hjälp med..."
                                        rows={4}
                                        className="mt-1"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full bg-[#c41e3a] hover:bg-[#a31830] text-white py-6 text-lg disabled:opacity-60"
                                >
                                    <Wrench className="w-5 h-5 mr-2" />
                                    {submitting ? 'Skickar...' : 'Skicka bokningsförfrågan'}
                                </Button>

                                <p className="text-sm text-slate-500 text-center">
                                    Vi återkommer inom 24 timmar för att bekräfta din bokning.
                                </p>
                            </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}