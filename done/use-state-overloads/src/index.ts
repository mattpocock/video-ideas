import { useState } from "react";

// No argument, no type argument

const [undefinedThing, setUndefinedThing] = useState();

// No argument, type argument

const [stringThing, setStringThing] = useState<string>();

// Argument, no type argument

const [emptyArray, setEmptyArray] = useState([]);

// Argument, type argument

const [arrayOfIds, setArrayOfIds] = useState<{ id: string }[]>([]);
