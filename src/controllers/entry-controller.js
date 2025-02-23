import {insertEntry, selectEntriesByUserId} from '../models/entry-model.js';

const postEntry = async (req, res) => {
  // user_id, entry_date, mood, weight, sleep_hours, notes
  // todo add trycatch
  try {
    const newEntry = req.body;
    newEntry.user_id = req.user.user_id;
    insertEntry(newEntry);
    res.status(201).json({message: "Entry added."});
  } catch (error) {
    console.error("Error adding entry:", error);
    res.status(500).json({message: "Failed to add entry. Please try again later."});
  }
};

/**
 * Get all entries of the logged in user
 * @param {*} req
 * @param {*} res
 */
const getEntries = async (req, res) => {
  try {
    const entries = await selectEntriesByUserId(req.user.user_id);
    res.json(entries);
  } catch (error) {
    console.error("Error fetching entries:", error);
    res.status(500).json({message: "Failed to retrieve entries. Please try again later."});
  }
};

export {postEntry, getEntries};

