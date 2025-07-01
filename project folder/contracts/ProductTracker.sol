// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductTracker {
    struct Product {
        uint id;
        uint weight;
        string dimensions;
        string photo;
        string video;
        string hubId;
        uint timestamp;
    }

    mapping(uint => Product[]) public productHistory;

    event ProductUpdated(uint productId, string hubId, uint timestamp);

    function updateProduct(
        uint _id,
        uint _weight,
        string memory _dimensions,
        string memory _photo,
        string memory _video,
        string memory _hubId
    ) public {
        Product memory newEntry = Product({
            id: _id,
            weight: _weight,
            dimensions: _dimensions,
            photo: _photo,
            video: _video,
            hubId: _hubId,
            timestamp: block.timestamp
        });

        productHistory[_id].push(newEntry);
        emit ProductUpdated(_id, _hubId, block.timestamp);
    }

    function getProductHistory(uint _id) public view returns (Product[] memory) {
        return productHistory[_id];
    }
}
