import { Component } from '@angular/core';

@Component({
    selector: 'app-media-item-list',
    templateUrl: './media-item-list.component.html',
    styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {
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

    onMediaItemDelete(mediaItem) {
        console.log('About to delete ', mediaItem);
    }
}
