pragma solidity ^0.5.16;
 
 
contract Auth{
    int Id;

    constructor() public{
        Id = 0;
    }

    function getID() view public returns(int)
    {
        return Id;
    }

    function Publish(int id) public
    {
        Id = id;
    }


}