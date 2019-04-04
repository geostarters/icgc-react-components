//@flow

declare type MapData = {

    layers: Array<Object>,
    sources: Array<MapDataSource>

}

declare type MapDatasource = {
	name: string,
	data: Object
}

declare type NewObjectLayers = {
    layersToAdd: Array<Object>,
    layersToDelete: Array<Object>,
    layersToUpdate: Array<Object>
}

declare type NewObjectSources = {
    newSources: Array<Object>,
    deletedSources: Array<Object>
}
