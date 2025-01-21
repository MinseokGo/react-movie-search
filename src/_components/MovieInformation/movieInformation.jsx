import React from 'react';
import NoSearchImage from '../../_assets/noSearchImage.gif';

export default function MovieInformation({ movies }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5rem',
            }}
        >
            {movies.length > 0 ? (
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap', // 줄바꿈 허용
                        justifyContent: 'center', // 가로 가운데 정렬
                        gap: '1.5rem', // 카드 사이 간격
                        marginTop: '2rem',
                        maxWidth: '60rem', // 콘텐츠 최대 너비 제한
                    }}
                >
                    {movies.map((movie, index) => (
                        <div
                            key={index}
                            style={{
                                textAlign: 'center',
                                width: '15rem',
                                height: '25rem',
                                border: '0.1rem solid #D0D0D0',
                                borderRadius: '1rem',
                                padding: '1rem',
                                boxShadow: '0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                style={{
                                    width: '100%',
                                    height: '20rem',
                                    objectFit: 'cover',
                                    borderRadius: '0.5rem',
                                }}
                            />
                            <h3
                                style={{
                                    marginTop: '0.5rem',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                {movie.Title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '0.9rem',
                                    color: '#555',
                                }}
                            >
                                Year: {movie.Year}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '5rem',
                    }}
                >
                    <img
                        src={NoSearchImage}
                        alt="No search"
                        style={{
                            width: '20rem',
                            height: '20rem',
                            objectFit: 'cover',
                            borderRadius: '0.5rem',
                        }}
                    />
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: '1.5rem',
                            marginTop: '2rem',
                            color: '#808080',
                        }}
                    >
                        어떤 영화를 검색해볼까요?
                    </p>
                </div>
            )}
        </div>
    );
}
