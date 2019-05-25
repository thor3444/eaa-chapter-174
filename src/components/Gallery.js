import React from "react";

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		return (images[item.replace("./", "")] = r(item));
	});
	return images;
}

const images = importAll(
	require.context("../images/gallery/", false, /\.(png|jpe?g|svg)$/)
);

const Gallery = () => {
	return (
		<div className="main">
			<h3>Gallery</h3>

			<div className="row">
				{Object.keys(images).map((key, index) => (
					<div key={index} className="col-12 col-md-6 col-lg-4 my-3">
						<a href={images[key]}>
							<img src={images[key]} alt={key} className="img-fluid" />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Gallery;
