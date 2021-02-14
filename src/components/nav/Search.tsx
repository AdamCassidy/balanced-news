import {
  createStyles,
  IconButton,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useNews } from "../../contexts/NewsContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      paddingBottom: "1rem",
    },
    hiddenXsDown: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  })
);

const Search = () => {
  const classes = useStyles();

  const { setSearch } = useNews();
  const handleSearch = () => {};

  return (
    <>
      <TextField
        className={(classes.search, classes.hiddenXsDown)}
        id="input-with-icon-textfield"
        type="search"
        label="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <IconButton
        edge="start"
        className={classes.hiddenXsDown}
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
    </>
  );
};

export default Search;
