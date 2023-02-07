using System;
using System.ComponentModel.DataAnnotations;

namespace Mission05_kizyy.Models
{
    public class GradeForm
    {
        [Range(0, 100, ErrorMessage = "Assignments score must be between 0 and 100")]
        public int Assignments { get; set; }

        [Range(0, 100, ErrorMessage = "Group Project score must be between 0 and 100")]
        public int GroupProject { get; set; }

        [Range(0, 100, ErrorMessage = "Quizzes score must be between 0 and 100")]
        public int Quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Midterm Exam score must be between 0 and 100")]
        public int MidtermExam { get; set; }

        [Range(0, 100, ErrorMessage = "Final Exam score must be between 0 and 100")]
        public int FinalExam { get; set; }

        [Range(0, 100, ErrorMessage = "Intex score must be between 0 and 100")]
        public int Intex { get; set; }
    }
}
