import axios from "axios";
import crypto from "crypto";
import {volunteer} from "../models/volunteer.js";

// base url

const cryptomus = axios.create({baseURL:""})