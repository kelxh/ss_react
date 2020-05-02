import React from 'react';

export function Photos({ photos }) {
    return (
        <div>
            {photos.map((photo, k) =>
                <div
                    key={k}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <img
                        src={photo.url}
                        style={{ width: "200px", height: "300px" }}
                        alt={'random pic'} />
                    <h3>{photo.title}</h3>
                </div>
            )}
        </div>
    )
}