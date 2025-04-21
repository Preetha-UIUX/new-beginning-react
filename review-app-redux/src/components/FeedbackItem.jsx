import React, { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import FeedbackContext from "../context/FeedbackContext";
import Card from "../shared/Card";
import { Edit } from "lucide-react";
import ThemeContext from "../context/ThemeContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, setFeedbackEdit } = useContext(FeedbackContext);

  const {theme} = useContext(ThemeContext)

  const themeStyles = {
    card: {
        backgroundColor: theme === 'Light' ? '#ffffff' : '#333333',
        color: theme === 'Light' ? '#333333' : '#ffffff'
    }
};

  return (
    <Card style={themeStyles.card}>
      <div className="card-wrapper">
        <h4>{item.text}</h4>
        <div>
          <div className="edit">
            <FaRegEdit
              onClick={() => {
                console.log("Editing item:", item);
                setFeedbackEdit({
                  item,
                  edit: true,
                });
              }}
            />
          </div>

          <div className="delete">
            <IoMdTrash onClick={() => deleteFeedback(item.id)} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeedbackItem;
