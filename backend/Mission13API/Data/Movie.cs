namespace Mission13API.Data
{
    public class Movie
    {
        public int MovieId { get; set; }
        public string Category { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
        public string Rating { get; set; }
        public bool? Edited { get; set; }
        public bool? LentTo { get; set;}
        public string? Notes { get; set; }
    }
}
