using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Mission05_kizyy.Controllers
{
    public class FirstViewController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        public IActionResult gradeCalculator ()
        {
            return View();
        }
    }

    public class FormData
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
