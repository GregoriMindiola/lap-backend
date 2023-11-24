import { Router } from "express";
import { createPlace, findPlace, findPlaces, updatePlace } from "../controllers/place.controller.js";

const router = Router();

router.get('/', findPlaces);
router.get('/:id', findPlace);

router.post('/', createPlace);

router.put('/:id', updatePlace)

export default router;

