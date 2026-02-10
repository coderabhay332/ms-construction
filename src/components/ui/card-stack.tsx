import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';

interface Card {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
}

export default function CardStack() {
    const initialCards: Card[] = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
            alt: "Project Intake & NDA",
            title: "Project Intake & NDA",
            description: "Scope definition, data review, confidentiality agreement."
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
            alt: "Kickoff & Planning",
            title: "Kickoff & Planning",
            description: "Dedicated project manager, deliverables list, milestones, and communication plan."
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&h=300&fit=crop",
            alt: "Design / Modeling Execution",
            title: "Design / Modeling Execution",
            description: "Engineering carried out as per agreed codes, standards, and tools."
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop",
            alt: "Quality Assurance",
            title: "Quality Assurance",
            description: "Multi-level checks and coordination reviews before submission."
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop",
            alt: "Client Review & Revisions",
            title: "Client Review & Revisions",
            description: "Structured feedback cycles with controlled versioning."
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop",
            alt: "Final Delivery & Support",
            title: "Final Delivery & Support",
            description: "Comprehensive handoff with ongoing technical assistance."
        }
    ];

    const [cards, setCards] = useState<Card[]>(initialCards);
    const [dragDirection, setDragDirection] = useState<'up' | 'down' | null>(null);
    const [showInfo, setShowInfo] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const dragY = useMotionValue(0);
    const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

    // Configuration
    const offset = 10;
    const scaleStep = 0.06;
    const dimStep = 0.15;
    const stiff = 170;
    const damp = 26;
    const borderRadius = 20;
    const swipeThreshold = 50;

    const spring = {
        type: 'spring' as const,
        stiffness: stiff,
        damping: damp
    };

    const moveToEnd = () => {
        setCards(prev => [...prev.slice(1), prev[0]]);
        setCurrentIndex((prev) => (prev + 1) % initialCards.length);
    };

    const moveToStart = () => {
        setCards(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
        setCurrentIndex((prev) => (prev - 1 + initialCards.length) % initialCards.length);
    };

    const handleDragEnd = (_: any, info: any) => {
        const velocity = info.velocity.y;
        const offset = info.offset.y;

        if (Math.abs(offset) > swipeThreshold || Math.abs(velocity) > 500) {
            if (offset < 0 || velocity < 0) {
                setDragDirection('up');
                setTimeout(() => {
                    moveToEnd();
                    setDragDirection(null);
                }, 150);
            } else {
                setDragDirection('down');
                setTimeout(() => {
                    moveToStart();
                    setDragDirection(null);
                }, 150);
            }
        }
        dragY.set(0);
    };

    return (
        <div className="w-full max-w-md mx-auto relative">
            {/* Card Stack Container */}
            <div className="relative w-full aspect-[3/4] overflow-visible">
                <ul className="relative w-full h-full m-0 p-0">
                    <AnimatePresence>
                        {cards.map(({ id, src, alt, title, description }, i) => {
                            const isFront = i === 0;
                            const brightness = Math.max(0.3, 1 - i * dimStep);
                            const baseZ = cards.length - i;

                            return (
                                <motion.li
                                    key={id}
                                    className="absolute w-full h-full list-none overflow-hidden border-2 border-[#88D0C4]/30 hover:border-[#ED5A2D]"
                                    style={{
                                        borderRadius: `${borderRadius}px`,
                                        cursor: isFront ? 'grab' : 'auto',
                                        touchAction: 'none',
                                        boxShadow: isFront
                                            ? '0 25px 50px rgba(0, 0, 0, 0.15)'
                                            : '0 15px 30px rgba(0, 0, 0, 0.08)',
                                        rotateX: isFront ? rotateX : 0,
                                        transformPerspective: 1000
                                    }}
                                    animate={{
                                        top: `${i * -offset}%`,
                                        scale: 1 - i * scaleStep,
                                        filter: `brightness(${brightness})`,
                                        zIndex: baseZ,
                                        opacity: dragDirection && isFront ? 0 : 1
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.8,
                                        transition: { duration: 0.2 }
                                    }}
                                    transition={spring}
                                    drag={isFront ? 'y' : false}
                                    dragConstraints={{ top: 0, bottom: 0 }}
                                    dragElastic={0.7}
                                    onDrag={(_, info) => {
                                        if (isFront) {
                                            dragY.set(info.offset.y);
                                        }
                                    }}
                                    onDragEnd={handleDragEnd}
                                    whileDrag={
                                        isFront
                                            ? {
                                                zIndex: cards.length + 1,
                                                cursor: 'grabbing',
                                                scale: 1.05,
                                            }
                                            : {}
                                    }
                                    onHoverStart={() => isFront && setShowInfo(true)}
                                    onHoverEnd={() => setShowInfo(false)}
                                >
                                    <img
                                        src={src}
                                        alt={alt}
                                        className="w-full h-full object-cover pointer-events-none select-none"
                                        draggable={false}
                                    />

                                    {/* Default State Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 flex items-end justify-center p-6"
                                        animate={{
                                            opacity: isFront && !showInfo ? 1 : 0
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="text-center mb-4">
                                            <Plus className="w-8 h-8 text-[#88D0C4] mx-auto mb-4 transition-transform duration-300" />
                                            <h3 className="text-white font-bold text-[16px] leading-tight">
                                                {title}
                                            </h3>
                                        </div>
                                    </motion.div>

                                    {/* Hover State - Full Content */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80 flex flex-col justify-between p-8"
                                        animate={{
                                            opacity: isFront && showInfo ? 1 : 0
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div>
                                            <Plus className="w-8 h-8 text-[#ED5A2D] mb-4 rotate-90 transition-all duration-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-[20px] mb-3 leading-tight">
                                                {title}
                                            </h3>
                                            <p className="text-white/90 text-[14px] leading-relaxed mb-4">
                                                {description}
                                            </p>
                                            <div className="flex items-center text-white/80 text-[12px] font-semibold">
                                                <ArrowRight className="w-4 h-4 mr-2" />
                                                Learn More
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.li>
                            );
                        })}
                    </AnimatePresence>
                </ul>
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-2 justify-center mt-6">
                {initialCards.map((_, i) => (
                    <motion.div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex % initialCards.length
                                ? 'bg-[#ED5A2D] w-8'
                                : 'bg-gray-300 w-1.5'
                            }`}
                        whileHover={{ scale: 1.2 }}
                    />
                ))}
            </div>

            {/* Interaction Hint */}
            <div className="text-center mt-4">
                <p className="text-[#555555] text-sm">
                    ↕️ Drag or hover to explore each step
                </p>
            </div>
        </div>
    );
}
