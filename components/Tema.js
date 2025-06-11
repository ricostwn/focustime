import React from 'react';

export default function Tema({ bgColor, setBgColor, colors, textColor }) {
    const changeColor = () => {
        const idx = colors.findIndex((c) => c.bg === bgColor);
        const nextColor = colors[(idx + 1) % colors.length].bg;
        setBgColor(nextColor);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent', // ubah jadi transparan penuh
            padding: 24,
            borderRadius: 16,
            margin: 24,
            color: textColor,
            transition: 'background 0.3s, color 0.3s',
        }}>
            <div
                style={{
                    marginBottom: 16,
                    padding: '8px 16px',
                    borderRadius: 8,
                    color: textColor,
                    fontWeight: 'bold',
                    fontSize: 18, // ukuran lebih kecil
                    textAlign: 'center',
                    userSelect: 'none',
                }}
            >
                Change Background
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
                {colors.map((color) => (
                    <button
                        key={color.bg}
                        onClick={() => setBgColor(color.bg)}
                        style={{
                            backgroundColor: color.bg,
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            border: bgColor === color.bg ? '3px solid #333' : '2px solid #fff',
                            cursor: 'pointer',
                            outline: 'none',
                        }}
                        aria-label={`Pilih warna ${color.bg}`}
                    />
                ))}
            </div>
        </div>
    );
}