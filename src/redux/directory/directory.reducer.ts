const INITIAL_STATE = {
	sections: [
		{
			title: "hats",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
			id: 1,
			link: "shop/hats",
		},
		{
			title: "jackets",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
			id: 2,
			link: "shop/jackets",
		},
		{
			title: "sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
			id: 3,
			link: "",
		},
		{
			title: "women",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
			size: "large",
			id: 4,
			link: "shop/women",
		},
		{
			title: "mens",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
			size: "large",
			id: 5,
			link: "shop/mens",
		},
	],
};

interface IAction {
	type: string;
}

const directoryReducer = (state = INITIAL_STATE, action: IAction) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
