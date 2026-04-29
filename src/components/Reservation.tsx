import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, MessageSquare } from 'lucide-react';

export default function Reservation() {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Secure a Table</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-primary leading-tight">
          Join Us for an Unforgettable Evening
        </h2>
        <p className="text-ink/60 mb-8 leading-relaxed italic">
          Experience the gentle whisper of the breeze while you savor meticulously crafted dishes. We recommend booking in advance to secure the best view of the garden terrace.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-primary">
            <Clock className="w-5 h-5 opacity-70" />
            <span className="text-sm font-medium">Lunch: 12:00 PM – 3:30 PM</span>
          </div>
          <div className="flex items-center gap-4 text-primary">
            <Clock className="w-5 h-5 opacity-70" />
            <span className="text-sm font-medium">Dinner: 7:00 PM – 11:30 PM</span>
          </div>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-secondary p-8 md:p-12 rounded-3xl shadow-2xl border border-primary/5 space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-50">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full bg-primary/5 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-50">Date</label>
            <div className="relative">
              <input 
                type="date" 
                className="w-full bg-primary/5 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-50">Guests</label>
            <select className="w-full bg-primary/5 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20 transition-all outline-none">
              <option>2 Persons</option>
              <option>4 Persons</option>
              <option>6 Persons</option>
              <option>Large Group</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-50">Time Slot</label>
            <select className="w-full bg-primary/5 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20 transition-all outline-none">
              <option>12:00 PM</option>
              <option>7:30 PM</option>
              <option>8:30 PM</option>
              <option>9:30 PM</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-bold opacity-50">Special Request</label>
          <textarea 
            rows={3} 
            placeholder="Dietary requirements or celebration notes..."
            className="w-full bg-primary/5 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
          />
        </div>

        <motion.button
          className="w-full bg-primary text-secondary py-4 rounded-xl uppercase tracking-widest font-bold shadow-xl hover:shadow-primary/20 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now
        </motion.button>
      </motion.form>
    </div>
  );
}
