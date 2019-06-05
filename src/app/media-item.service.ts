export class MediaItemService {
	get() {
		return this.mediaItems;
	}

	add(mediaItem) {
		this.mediaItems.push(mediaItem);
	}

	delete(mediaItem) {
		let index = this.mediaItems.indexOf(mediaItem);
		if(index >= 0) {
			this.mediaItems.splice(index, 1);
		}
	}
	
	mediaItems = [
		{
			it: 1,
			name: 'Firebug',
			medium: 'Series',
			category: 'Science Fiction',
			year: 2010,
			watchedOn: 1293166565384,
			isFavorite: false
		},
		{
			it: 1,
			name: 'Waterbug',
			medium: 'Series',
			category: 'Science Fiction',
			year: 2009,
			watchedOn: 1293166565384,
			isFavorite: false
		},
		{
			it: 3,
			name: 'Spiderman',
			medium: 'Movies',
			category: 'Love Story',
			year: 2000,
			watchedOn: 1293166565384,
			isFavorite: true
		}
	];
}