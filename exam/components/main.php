<main class="main flex-grow-1">
    <section class="content-card">
        <div class="header">Create New Exam</div>
        <div class="panel">
            <div class="content">
                <div class="input-group">
                    <input placeholder="Enter The Exam Name" />
                    <label>Assign the exam a name (shown in the Exam List)</label>
                </div>
                <div class="custom-select">
                    <div class="custom-select-head">Select Batch</div>
                    <div class="custom-checkbox-list">
                        <div class="custom-list d-flex flex-wrap-wrap">
                            <label class="custom-checkbox">
                                <input type="checkbox" checked>
                                <em class="checkbox"></em>
                                <span class="label">Batch 1</span>
                            </label>
                            <label class="custom-checkbox">
                                <input type="checkbox" >
                                <em class="checkbox"></em>
                                <span class="label">Batch 2</span>
                            </label>
                            <label class="custom-checkbox">
                                <input type="checkbox" checked>
                                <em class="checkbox"></em>
                                <span class="label">Batch 3</span>
                            </label>
                            <label class="custom-checkbox">
                                <input type="checkbox" >
                                <em class="checkbox"></em>
                                <span class="label">Batch 4</span>
                            </label>
                            <label class="custom-checkbox">
                                <input type="checkbox" >
                                <em class="checkbox"></em>
                                <span class="label">Batch 5</span>
                            </label>
                            <label class="custom-checkbox">
                                <input type="checkbox" >
                                <em class="checkbox"></em>
                                <span class="label">Batch 6</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="content-card">
        <div class="header">Exam Questions</div>
        <div class="panel">
            <div class="content">
               <label class="check-list">
                   <input type="radio" name="examType" />
                   <em class="radio"></em>
                   <div class="check-list__info">
                       <div class="heading">No digital exam questions</div>
                       <p class="desc">The questions are given outside of the system, e.g. orally or on a piece of paper.</p>
                   </div>
               </label>

               <label class="check-list openModal" data-target="pdfModal">
                   <input type="radio" name="examType" />
                   <em class="radio"></em>
                   <div class="check-list__info">
                       <div class="heading">Use a PDF file</div>
                       <p class="desc">Add or change your choice of a PDF-file. You can add additional PDF files under "Accessibility"</p>
                   </div>
               </label>

               <label class="check-list openModal" data-target="examModal">
                   <input type="radio" name="examType" />
                   <em class="radio"></em>
                   <div class="check-list__info">
                       <div class="heading">Write exam questions</div>
                       <p class="desc">Write your questions here, or paste from Microsoft Word.</p>
                   </div>
               </label>

            <label class="check-list openModal" data-target="newExamModal">
                   <input type="radio" name="examType" />
                   <em class="radio"></em>
                   <div class="check-list__info">
                       <div class="heading">Auto-marked exams</div>
                       <p class="desc">Create exams with different question types such as "multiple choice", "fill in the gaps", etc. You can also enable auto-marking for these exams.</p>
                   </div>
               </label>
            </div>
        </div>
    </section>

    <section class="content-card">
        <div class="header">Student Information</div>
        <div class="panel">
            <div class="content">
                <section class="section">
                    <div class="sub-heading">Student Information</div>
                    <p class="sub-heading-desc">Tick what information the students have to provide before starting the exam.</p>
                    <div class="check-list-items">
                        <label class="custom-checkbox">
                            <input type="checkbox" checked>
                            <em class="checkbox"></em>
                            <span class="label">First Name</span>
                        </label>
                        <label class="custom-checkbox">
                            <input type="checkbox" checked>
                            <em class="checkbox"></em>
                            <span class="label">Last Name</span>
                        </label>
                        <label class="custom-checkbox">
                            <input type="checkbox">
                            <em class="checkbox"></em>
                            <span class="label">Email</span>
                        </label>
                        <label class="custom-checkbox">
                            <input type="checkbox" checked>
                            <em class="checkbox"></em>
                            <span class="label">Class</span>
                        </label>
                        <label class="custom-checkbox">
                            <input type="checkbox">
                            <em class="checkbox"></em>
                            <span class="label">Teacher Name</span>
                        </label>
                        <label class="custom-checkbox">
                            <input type="checkbox">
                            <em class="checkbox"></em>
                            <span class="label">Phone Number</span>
                        </label>
                        <label class="custom-checkbox">
                            <input type="checkbox">
                            <em class="checkbox"></em>
                            <span class="label">Student Id</span>
                        </label>

                    </div>
                </section>
                <section class="section">
                    <div class="sub-heading">Anonymize exam</div>
                    <p class="sub-heading-desc">Students' identities are replaced by unique codes, and you may reveal the identities after grading the exams.</p>
                    <div class="toggle-btn">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                        <div class="text">How does this work?</div>
                    </div>
                </section>
            </div>
        </div>
    </section>

    <section class="content-card">
        <div class="header">Student Workspace</div>
        <div class="panel">
            <div class="content">
                <section class="section">
                    <div class="sub-heading">Writing area</div>
                    <div class="toggle-btn">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                        <div class="text">The student is given an area to write answers in.</div>
                    </div>
                </section>
                <section class="section sub-section">
                    <div class="sub-heading"><strong>Accessibility tools</strong></div>
                    <div class="sub-heading">Allow translation help</div>
                    <div class="toggle-btn">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                        <div class="text">Gives the student access to translation help for sentences or single words, in many languages.</div>
                    </div>
                </section>
                <section class="section sub-section">
                    <div class="sub-heading">English synonyms</div>
                    <div class="toggle-btn">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider"></span>
                        </label>
                        <div class="text">Enables the student to get synonyms for English words.</div>
                    </div>
                </section>
            </div>
        </div>
    </section>

    <section class="content-card">
        <div class="header">Exam Instructions</div>
        <div class="panel">
            <div class="content ">
                <div class="py-4">
                    <textarea name="insExam" id="insExam"></textarea>
                </div>
            </div>
        </div>
    </section>

    <section class="content-card">
        <div class="header">Security</div>
        <div class="panel">
            <div class="content">
               <label class="check-list">
                   <input type="radio" name="securityType" checked />
                   <em class="radio"></em>
                   <div class="check-list__info">
                       <div class="heading">Require high-security mode</div>
                       <p class="desc">Exam.net-applications (iOS and macOS), SEB (Windows), TaT (Windows 10) or the Chromebook-app. <br /> The high-security mode is recommended as soon as the necessary software is installed.</p>
                   </div>
               </label>

               <label class="check-list">
                   <input type="radio" name="securityType" />
                   <em class="radio"></em>
                   <div class="check-list__info">
                       <div class="heading">Allow any browser but prefer high-security mode</div>
                       <p class="desc">High-security mode will be suggested, but the student may also start the exam in any browser. You can see when monitoring the exam if the student is using the high-security mode.</p>
                   </div>
               </label>

               <label class="check-list">
                   <input type="radio" name="securityType" />
                   <em class="radio"></em>
                   <div class="check-list__info">
                       <div class="heading">Allow any browser</div>
                       <p class="desc">The exam will open in any browser</p>
                   </div>
               </label>
               
            </div>
        </div>
    </section>

    <div class="action-box text-center">
        <button class="btn">Create the exam</button>
    </div>
</main>