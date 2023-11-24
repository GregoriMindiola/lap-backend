import Place from "../models/place.js";

export const createPlace = async (req, res) => {
  try {
    const { name, type, address, review } = req.body;
    const place = new Place({ name, type, address, review });
    await place.save();
    return res.status(201).json({ message: "Created a place" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const findPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    return res.status(200).json(places);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const findPlace = async (req, res) => {
  try {
    const { id } = req.params;
    const place = await Place.findById(id);
    return res.status(200).json(place);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const updatePlace = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const place = await Place.findById(id);
    console.log(place)
    if (!place) {
      return res.status(404).json({
        msg: 'There is no place with the id' + id,
      });
    }
    console.log(place)
    await place.updateOne(body);
    return res.json({ data: place }).status(200);

  } catch (error) {
    return res.status(500).json({
      error: error.message,
      msg: 'An error occurred while updating the place',
    });
  }
};
